$(".bl").each((i, o) => {
    $(o).mouseenter(() => {
        $(o).addClass("info");
    })
    $(o).mouseleave(() => {
        $(o).removeClass("info");
    })
})
