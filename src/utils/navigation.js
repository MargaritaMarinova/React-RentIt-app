import LogoutPage from "../pages/logout"

const getNavigation = (user) => {

    const authLinks = [
        
        ]

    const guestLinks = [{
        title: "Начало",
        link: "/"
    },
    {
        title: "Register",
        link: "/register"
    },
    {
        title: "Login",
        link: "/login"
    },
    {
        title: "Продукти",
        link: "/items"
    },
    {
        title: "Въведи нов продукт",
        link: "/create"
    },
    {
        title: "Профил",
        link: `/profile/${user && user.id}`
    },
    {
        title: "LogOut",
        link: '/logout'
    }
]
const loggedIn = user && user.loggedIn
return loggedIn ? authLinks : guestLinks
}

export default getNavigation