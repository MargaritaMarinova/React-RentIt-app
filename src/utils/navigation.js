const getNavigation = (userid) => {

    const links = [{
            title: "Начало",
            link: "/"
        },
        {
            title: "Продукти",
            link: "/items"
        },
        {
            title: "Профил",
            link: `/profile/${userid}`
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
    return links
}

export default getNavigation