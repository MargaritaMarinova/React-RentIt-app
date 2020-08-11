import LogoutPage from "../pages/logout"

const getNavigation = (user) => {

    const authLinks = [
        {
            title: "Продукти",
            link: "/items"
        },
        {
            title: "Въведи нов продукт",
            link: "/item/create"
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
    }
]
const loggedIn = user && user.loggedIn
return loggedIn ? authLinks : guestLinks
}

export default getNavigation