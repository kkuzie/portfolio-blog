
//adds or removes .nav-open which adds position fixed to hamburger
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})



// for animated flyout menu
$(document).ready(function () {

    $(window).mousemove(function (e) {
        var y = e.clientY;
        // console.log(y);
        $('.nav__item--hover-element').css('margin-top', y);
    });

    $('.nav__link').mouseover(function() {
        var activeLinkId = $(this).attr('href');
        // console.log(activeLinkId);//shows that when hover which links are active
        $('.nav__img--link-img').removeClass('active');
        $('.nav__img--link-img' + activeLinkId).addClass('active');
    });

    var toggleBtn = document.querySelector('.nav-toggle');

    //gsap animation in nav menu
    var tl = new TimelineMax({paused: true});

    //hamburger animation
    tl.to('.hamburger', .5, {
        // right: '-500'
        rotate: 90
    })
    tl.to('.hamburger-top', .5, {
        rotate: 45,
        top: 10
    }, '-=.5')//offset
    tl.to('.hamburger-bottom', .5, {
        rotate: -45,
        top: 10
    }, '-=.5')//offset

// entire menu slides in:
    tl.to('.nav', 1, {
        right: '0'
    })

    // menu items stagger into view
    tl.from('nav ul li', .8, {
        x: -1000,
        opacity: 0,
        stagger: .3
    })

    //bar comes into view
    tl.from('.nav__item--hover-element', 1, {
        x: -1000,
        opacity: 0
    }, '-=1' )

    // changes an image when hover over menu item
    // tl.from('.nav__img', 1.4, {
    //     x: 1000,
    // })

    var tlSlideIn = new TimelineMax({paused: true});

    tlSlideIn.from('.nav__img--home', .15, {
        y: 1500
    });

    tlSlideIn.from('.nav__img--whatIdo', .15,{
        x: 1000
    })

    tlSlideIn.from('.nav__img--about', .15, {
        y: -1000
    })

    tlSlideIn.from('.nav__img--work', .2, {
        x: -1000,
        rotate: 90
    })

    $(document).on('mouseenter', ".nav__link", function(){
        tlSlideIn.play();
        console.log('mouseentered');
    }).on('mouseleave', '.nav__link', function(){
        tlSlideIn.reverse();
        console.log('mouseleave');
    });

//    $('.nav__link--home').mouseenter(function() {
//     tl.from('.nav__img--home', 1.4, {
//         y: 1500
//     })
//     console.log('mouseenter slide in');
// });
// $('.nav__link--home').mouseleave(function() {
//     tl.to('.nav__img--home', 1.4, {
//         y: 0
//     })
//     console.log('mouseenter slide out');
// });

////////////////////////////////////////////////////////////////    
// $('.nav__link--whatIdo').mouseenter(function() {
//     tl.from('.nav__img', 1.4, {
//         x: 1000
//     })

// });
// ////////////////////////////////////////////////////////////////
// $('.nav__link--about').mouseenter(function() {
//     tl.from('.nav__img', 1.4, {
//         y: -500
//     })
// });
// //////////////////////////////////////////////////////////////////
// $('.nav__link--work').mouseenter(function() {
//     tl.from('.nav__img', 1.4, {
//         x: 1000,
//         rotate: 90
//     })
// });


    




    //timeline reverse
    tl.reverse();

    //click to play timeline
    toggleBtn.onclick = function() {
        tl.reversed(!tl.reversed());
    }
});

// let navLink = $('.nav__link');
// let hover =
//     //changes an image when hover over menu item
//     tl.from('.nav__img', 1.4, {
//         x: 1000,
//     })

// navLink.addEventListener('mouseenter', () => hover.play());
// navLink.addEventListener('mouseleave', () => hover.reverse());
    