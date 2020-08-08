const getNavigation = (user) => {

    const authLinks = [{
            title: "Начало",
            link: "/"
        },
        {
            title: "Продукти",
            link: "/items"
        },
        {
            title: "Профил",
            link: `/profile/${user && user.id}`
        },
        {
            title: "Logout",
            link: "/logout"
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