$(document).ready(() => {
    loadFollower();
    $(window).resize(() => {
        const width = $(window).width();
        WindowlessThan1200Px(width);
        WindowlessThan1000Px(width);
    });
});

function loadFollower() {
    const followers = Array.from(follower);
    followers[0] = new follower('Elon Musk', 'C:\Users\barat\WebstormProjects\Twitter\images\download.jpg', "@elonmusk", "Mars & cars");
    followers[1] = new follower('Mark Zuckerberg', 'C:\Users\barat\WebstormProjects\Twitter\images\download (1).jpg', "@mark zuckerberg", "facebook manager");
    followers[2] = new follower('Jeff Bezos', 'C:\Users\barat\WebstormProjects\Twitter\images\OIP.jpg', "@jeff bezos", "Amazon");
    setFollowerAttribute(followers);
}

function setFollowerAttribute(followers) {
    const container = $('.who-to-follow #content');
    const image = 'C:\Users\barat\WebstormProjects\Twitter\images\myphoto.jpg';
    for (let x of followers) {
       const value  = `<div class="to-follow-container">
                       <a href="#" class="profile-container">
                           <img src=${image} class="profile-photo" alt="Not supported">
                           <div class="profile-content">
                               <p class="profile-name">
                                  ${x.name}
                               </p>
                               <p class="profile-username">
                                  ${x.userName} 
                               </p>
                           </div>
                        </a>
                       <button class="btn btn-dark" id="follow-button">Follow</button>
                   </div>
                    `
        container.after(value);
    }
}

function WindowlessThan1200Px(width) {
    const button = $('.btn-info');
    if (width < 1200)
        button.html("<i class='bx bx-navigation'></i>");
    else
        button.html("Tweet");
}

function WindowlessThan1000Px(width) {
    const exploreLink = $('#explore-link');
    const exploreHtml = "<li><a href=\"#\" id=\"explore-link\"><i class='bx bx-hash' >" +
        "</i> <span class=\"nav-content\">Explore</span></a></li>";
    const searchHtml = "<li><a href=\"#\" id=\"search-link\"><i class='bx bx-search'></i>" +
        "</a></li>";
    if (width < 1000)
        exploreLink.html(searchHtml);
    else
        exploreLink.html(exploreHtml);
}

const follower = function(name,photo,username,work) {
    this.name  = name;
    this.userName = username;
    this.Photo = photo;
    this.work = work;
}
