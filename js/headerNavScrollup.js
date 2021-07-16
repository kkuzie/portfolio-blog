//////// HEADER NAV bar reappear on scroll up
//////// https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp////////

//////// need to deactivate onclick of navlink
let navAppearOnScrollup = function () {

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector("header").style.top = "0";
        } else {
            document.querySelector("header").style.top = "-190px";
        }
        prevScrollpos = currentScrollPos;
    }
    }
    navAppearOnScrollup();
    
    
    let pauseNavAppearOnScrollup = function () {
    var prevScrollpos2 = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos2 = window.pageYOffset;
        if (prevScrollpos2 < currentScrollPos2) {
            document.querySelector("header").style.top = "-190px";
        } else {
            document.querySelector("header").style.top = "-190px";
        }
        prevScrollpos2 = currentScrollPos2;
    }
    }
    