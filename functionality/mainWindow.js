$(document).ready(() => {
    loadFollower();
    dropDownControl();
    loadTrends();
    $(window).resize(() => {
        const width = $(window).width();
        WindowlessThan1200Px(width);
        WindowlessThan1000Px(width);
    });
});

function loadTrends() {
    const trends = Array.from(Trend);
    const ahm = "Mohammad";

}

function loadFollower() {
    const followers = Array.from(follower);
    followers[0] = new follower('Elon Musk', getImage('C:\\Users\\barat\\WebstormProjects\\Twitter\\images\\download.jpg'), "@elonmusk"
        , "Mars & cars , Chips & Dips"
        , "1000", "102.5M");
    followers[1] = new follower('Mark Zuckerberg', getImage('C:\\Users\\barat\\WebstormProjects\\Twitter\\images\\download (1).jpg'), "@mark zuckerberg",
         "Facebook CEO & Instagram CEO & Whatsapp CEO"
        , "800", "200.5M");
    followers[2] = new follower('Jeff Bezos', getImage('C:\\Users\\barat\\WebstormProjects\\Twitter\\images\\OIP.jpg'), "@jeff bezos",
        "Amazon CEO , goods and manager"
        , "2000", "400.5M");
    setFollowerAttribute(followers);
}

function getImage(source) {
    const image = new Image(200, 200);
    image.src = source;
    return image;
}

function dropDownControl() {
    $('.to-follow-container .dropdown').hover(() => {
        const dropdown = $(this).children('.dropdown-menu');
        if (dropdown.is(":visible"))
            dropdown.parent().toggleClass("open");
    });
}

function setFollowerAttribute(followers) {
    const follower = getFollowerHtml(followers[0].name, followers[0].userName,
        followers[0].Photo.src, followers[0].work, followers[0].follower_quantity, followers[0].follwing_quantity
    );
    const next = $('.who-to-follow #content').after(follower);
    for (let i = 1; i < 3; i++) {
        next.after(getFollowerHtml(followers[i].name, followers[i].userName,
            followers[i].Photo.src, followers[i].work, followers[i].follower_quantity, followers[i].follwing_quantity));
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

const follower = function (name, photo, username, work, q_following, q_follower) {
    this.name = name;
    this.userName = username;
    this.Photo = photo;
    this.work = work;
    this.follower_quantity = q_follower;
    this.follwing_quantity = q_following;
}

function getFollowerHtml(name, username, photo, work, follower_quantity, following_quantity) {
    const html = `
                <div class="to-follow-container">
                    <div class="dropdown">
                       <a href="#" class="profile-container" data-toggle="dropdown">
                           <img src=${photo} class="profile-photo" alt="Not supported">
                           <div class="profile-content">
                               <p class="profile-name">
                                  ${name}
                               </p>
                               <p class="profile-username">
                                  ${username} 
                               </p>
                           </div>
                        </a>
                        <div class="dropdown-menu">
                            ${dropdown_menu(work, follower_quantity, following_quantity, photo, name, username)}       
                        </div>
                     </div>
                       <button class="btn btn-dark" id="follow-button">Follow</button>
                   </div>
                    `;
    return html;
}

function dropdown_menu(work, follower_quantity, following_quantity, photo, name, username) {
    const html = `
      <div class="drop-down-header">
         <div class="menu-item-personal-info">
            <a href="#">
              <img src=${photo} alt="" class="profile-photo"> 
            </a>
            <a href="#">
              <p class="profile-name">${name}</p> 
            </a>
            <a href="#">
              <p class="profile-username">${username}</p> 
            </a>  
         </div>
         <button class="btn btn-dark" id="follow-button">Follow</button>  
      </div>
      <p class="person-work">
        ${work} 
      </p>
      <span class="follow-container">
         <a href="#" id="following-info">
           ${following_quantity} Following
         </a>
         
         <a href="#" id="follower-info">
           ${following_quantity} Followers
         </a>  
      </span>
   `

    return html;
}

const Trend = function (heading,tittle,tweet_quantity) {
    this.heading = heading;
    this.tittle = tittle;
    this.tweet_quantity =tweet_quantity;
}