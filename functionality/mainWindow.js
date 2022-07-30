
$(document).ready(() => {
    $(window).resize(() => {
        const width = $(window).width();
        WindowlessThan1200Px(width);
        WindowlessThan1000Px(width);
    });
});

function WindowlessThan1200Px(width) {
    const button = $('.btn-info');
    if (width < 1200)
        button.html("<i class='bx bx-navigation'></i>");
    else
        button.html("Tweet");
}

function  WindowlessThan1000Px(width) {
    const exploreLink = $('#explore-link');
    const exploreHtml = "<li><a href=\"#\" id=\"explore-link\"><i class='bx bx-hash' >" +
        "</i> <span class=\"nav-content\">Explore</span></a></li>";
    const searchHtml = "<li><a href=\"#\" id=\"search-link\"><i class='bx bx-search'></i>" +
        "</a></li>";
    if(width<1000)
       exploreLink.html(searchHtml);
    else
       exploreLink.html(exploreHtml);
}


