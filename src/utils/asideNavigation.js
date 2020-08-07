const asideNavigation = (userid) => {

    const links = [{
            title: "Кухня",
            link: "/kitchen"
        },
        {
            title: "Всекидневна",
            link: "/livingroom"
        },
        {
            title: "Спалня",
            link: `/bedroom`
        },
        {
            title: "Баня",
            link: "/bathroom"
        },
        {
            title: "На открито",
            link: "/outside"
        }
    ]
    return links
}

export default asideNavigation