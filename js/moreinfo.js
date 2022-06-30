const pages = [
    {
        id: "backend",
        title: "Easy backend communication",
        info: [
            "<p>Usually with Velocity, you'd have to use Redis or something similar to communicate with your backend servers.</p>",
            "<p>Thanks to our friendly Backend system, you can communicate with backend servers by simply installing a plugin on them, and using our API to make dynamic, stunning systems.</p>"
        ]
    },
    {
        id: "customization",
        title: "Ultimate Customization",
        info: [
            "<p>We give you full reign over how you want things to look, you can simply modify the messages file to edit messages that the proxy will display!</p>",
            "<p>Of course, we provide support for <b>color and formatting</b>, as well as <b>RGB</b>!</p>"
        ]
    },
    {
        id: "management",
        title: "Manage and track your playerbase",
        info: [
            "<p>Keep track of what your players are up to, with our amazing analytic tools.</p>",
            "<p>Our system can tell you what players spent most time on, retention per server, which servers your players typically prefer, and which servers they first log into, and a whole lot more.</p>",
            "<p>Providing tools to manage your playerbase with ease.</p>"
        ]
    },
    {
        id: "antibot",
        title: "Built in Anti-Bot",
        info: [
            "<p>We want to make sure your servers are up all the time, without issues.<p>",
            "<p>That's why we provide a free built in anti-bot solution.</p>",
            "<p>Our system provides protecton from many forms of attacks that could be used to harm your server, all of which are fully customizable!</p>"
        ]
    },
    {
        id: "api",
        title: "Enhanced API",
        info: [
            "<p>We make it easier for developers, so you can do more while writing less.</p>",
            "<p>Offering full documentation with examples, the Octopus API helps developers create incredible plugins with minimal time and effort, with our built in systems and functions: there's nothing you can't do.</p>"
        ]
    },
    {
        id: "commands",
        title: "More commands",
        info: [
            "<p>We also offer virtually every command you could ever want to help manage and maintain your servers.</p>",
            "<p>From finding players to broadcasting with titles and more, as well as scheduling commands: we offer it all.</p>",
            `<p>Anything that we don't include, it's easy as 123 to create your own commands with our <a href='#' onclick='setPage("moreinfo.html?info=api")'>API</a></p>`
        ]
    },
    {
        id: "scoreboard",
        title: "Scoreboards",
        info: [
            "<p>Our API includes an amazing manager to help create beautiful dynamic or static scoreboards!</p>",
            "<p>Combined with our custom backend communication, you can create some incredible scoreboard systems.</p>"
        ]
    },
    {
        id: "gui",
        title: "GUI support",
        info: [
            "<p>Sometimes, commands are just a little too big. Aren't GUIs just easier sometimes?</p>",
            "<p>We allow you to create dynamic GUIs with absolute complete ease. We even provide our own GUIs to use built in!</p>"
        ]
    },
    {
        id: "os",
        title: "Open Source",
        info: [
            "<p>Want to contribute? We would love to work with you, and help bring even more features to Octopus!</p>",
            "<p>Simply create a fork of our project on our GitHub page and then submit a pull request! We'll be sure to check it out.</p>"
        ]
    }
]

$(document).ready(() => {
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has("info")) {
        let i = searchParams.get("info")
        for (p of pages) {
            if (p.id == i) {
                $("#title").html(p.title);
                $("#info").html(p.info);
                return;
            }
        }
    }
    setPage("index.html")
})