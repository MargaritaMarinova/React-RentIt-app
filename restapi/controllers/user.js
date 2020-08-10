const jwt = require('../utils/jwt');
const {cookie} = require('../config/config');
const User = require('../models/User');

module.exports = {
    get: {
        logout(req, res, next) {
            req.user = null,
                res.clearCookie(cookie).redirect('/home/')
        }
    },

    post: {
        login(req, res, next) {
            const {
                username,
                password
            } = req.body;

            User.findOne({
                    username
                })
                .then((user) => {
                    return Promise.all([user.passwordsMatch(password), user])
                }).then(([match, user]) => {
                    if (!match) {
                        next(err); 
                        return;
                    }

                    const token = jwt.createToken(user);

                    res
                        .status(201)
                        .cookie(cookie, token, {
                            maxAge: 3600000
                        })
                        .redirect('/home/');
                })
        },

        register(req, res, next) {
            const {
                username,
                password,
                rePassword
            } = req.body;
            

            
            User.create({username, password})
                .then((createdUser) => {
                    console.log(createdUser);
                    res.redirect('/');
                });
        }
    }
}

