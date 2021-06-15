$(document).ready(function () {


///////gsap animation in nav menu
var tl = new TimelineMax({paused: true});

///////hamburger animation
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

//////// entire menu slides in:
    tl.to('.nav', 1, {
        right: '0'
    })

//////// menu items stagger into view
    tl.from('nav ul li', .8, {
        x: -1000,
        opacity: 0,
        stagger: .3
    })

////////bar comes into view
    tl.from('.nav__item--hover-element', 1, {
        x: -1000,
        opacity: 0
    }, '-=1' )

    // changes an image when hover over menu item
    // tl.from('.nav__img', 1.4, {
    //     x: 1000,
    // })

    ////////////////////////////////////////////////////////////////
////////images on menu item hover
    var tlSlideIn = new TimelineMax({paused: true});

    tlSlideIn.from('.nav__img--home', .5, {
        y: 1000
    }, .5);

    tlSlideIn.from('.nav__img--whatIdo', .5,{
        x: 1000
    }, .5)

    tlSlideIn.from('.nav__img--about', .5, {
        y: -1000
    }, .5)

    tlSlideIn.from('.nav__img--work', .5, {
        x: -1000,
        rotate: 90
    }, .5)

    $(document).on('mouseenter', ".nav__link", function(){
        tlSlideIn.play();
    }).on('mouseleave', '.nav__link', function(){
        tlSlideIn.reverse();
    });

    ////////go to section - 
    
    //DELETE doesnt work
    // var whatIdo = $('section#whatIdo');

    // whatIdoPos = whatIdo.offset().top;

    // $('a#whatIdoLink').click(function(){
    //     TweenLite.to(window, 2, {scrollTo: whatIdoPos});
    // });

    //DELETE doesnt work
    // document.querySelector('.nav__link').forEach(element => {
    //     element.addEventListener('click', function () {

    //         let div = this.getAttribute('href').split('#')[1]

    //         gsap.to(window, {
    //             scrollTo: (document.getElementById(div).offsetLeft * (container.offsetWidth / (container.offsetWidth - window.innerWidth)))
    //              })
    //     });
    // });


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
    navToggle.onclick = function() {
        tl.reversed(!tl.reversed());
    }

////////to CLOSE MENU when click menu item links
    $(document).on("click", ".nav__link", function(e) {
        e.preventDefault();
        tl.reversed(!tl.reversed());
        // setTimeout(function() {
        //   window.location.hash = "whatIdo";
        // }, 500);
// $(document).on("click", ".nav__link--whatIdo", function(e){
//           window.location.hash = "whatIdo";
//       });
      });
    
      /////////DELETE doesnt do what I need
    //   $(document).on('click', 'a[href^="#"]', function (e) {
    //     e.preventDefault();
    //     $('html, body').stop().animate({
    //         scrollTop: $($(this).attr('href')).offset().top
    //     }, 1000, 'linear');
    // });
});