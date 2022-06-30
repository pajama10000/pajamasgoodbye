$(".bl").each((i, o) => {
    $(o).mouseenter(() => {
        $(o).addClass("info");
    })
    $(o).mouseleave(() => {
        $(o).removeClass("info");
    })
    //
    $(o).click(() => {
        setPage(`moreinfo.html?info=${$(o).attr("id")}`)
    });
})
