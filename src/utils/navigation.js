const getNavigation = (userid) => {

    const links = [{
            title: "Home",
            link: "/"
        },
        {
            title: "Items",
            link: "/items"
        },
        {
            title: "Profile",
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