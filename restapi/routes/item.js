const controllers = require('../controllers');
const router = require('express').Router();
const { isAuth } = require('../utils/isAuth');

router.get('/', controllers.item.get);

router.post('/', isAuth(), controllers.item.post);
router.post('/create', isAuth(), controllers.item.post);

router.put('/:id', isAuth(), controllers.item.put);

router.delete('/:id', isAuth(), controllers.item.delete);

module.exports = router;