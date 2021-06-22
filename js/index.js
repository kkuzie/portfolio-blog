gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollToPlugin);

//adds or removes .nav-open which adds position fixed to hamburger
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    //*brings sections to the top of .nav so hovering works, then js brings it back to 0 when nav menu appears*
    document.body.classList.toggle('nav-open');
    if (document.body.classList.contains('nav-open')) {
        $('.portfolio').css('z-index', '0');
        $('footer').css('z-index', '0');
        $('section').css('z-index', '0');
    } else {
        //*brings section to the top of .nav so hovering works, then js brings it back to 0 when nav menu appears*
        window.setTimeout(function () {
            $('.portfolio').css('z-index', '100');
            $('section').css('z-index', '100');
            $('footer').css('z-index', '100');
        }, 3000);
    }
});

///////removes nav-open so flyout disappears 
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});

////////changes the images on hover of menu links
$('.nav__link').mouseover(function () {
    var activeLinkId = $(this).attr('data-target');
    // console.log(activeLinkId);//shows that when hover which links are active
    $('.nav__img--link-img').removeClass('active');
    $('.nav__img--link-img' + activeLinkId).addClass('active');
});

//////// HEADER NAV bar reappear on scroll up
//////// https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp////////

//////// need to deactivate onclick of navlink
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("header").style.top = "0";
    } else {
        document.querySelector("header").style.top = "-180px";
    }
    prevScrollpos = currentScrollPos;
}

//////ADDs the path to address bar,  scrolls  to section. 
////////https://www.yogihosting.com/jquery-scroll-to-element/ ////////
$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var targetEle = this.hash;
    var $targetEle = $(targetEle);
    console.log(targetEle);

    $('html, body').stop().animate({
        'scrollTop': $targetEle.offset().top
    }, 800, 'swing', function () {
        window.location.hash = targetEle;
    });
});


$(document).ready(function () {

    //refresh page on browser resize
    //////// to make animations work at different media query sizes
    ////////https://www.sitepoint.com/jquery-refresh-page-browser-resize/  ////////
    $(window).bind('resize', function () {
        if (window.RT) clearTimeout(window.RT);
        window.RT = setTimeout(function () {
            this.location.reload(false); /* false to get page from cache */
        }, 200);
    });


    ////////PEEK A BOO at intro
    let tlPeekInR = new TimelineMax({
        paused: true
    });
    let tlPeekInL = new TimelineMax({
        paused: true
    });

    ////////function to play and reverse intro animations
    let PeekInPlay = function () {
        $(document).on('mouseenter', ".intro__gd", function () {
            tlPeekInR.play();
        }).on('mouseleave', '.intro__gd', function () {
            tlPeekInR.reverse();
        });

        $(document).on('mouseenter', ".intro__fed", function () {
            tlPeekInL.play();
        }).on('mouseleave', '.intro__fed', function () {
            tlPeekInL.reverse();
        });

        ////////on hover of h1 - both graphic design and front end dev slides in
        $(document).on('mouseover', ".section__title--intro", function () {
            tlPeekInR.play();
            tlPeekInL.play();
        }).on('mouseout', '.section__title--intro', function () {
            tlPeekInR.reverse();
            tlPeekInL.reverse();
        });
    }

    ////////MQs for PEEK A BOO
    let mq1600andup = window.matchMedia('(min-width: 1600px)');
    let mq1400to1599 = window.matchMedia('(min-width: 1400px) and (max-width: 1599px');
    let mq1200to1399 = window.matchMedia('(min-width: 1200px) and (max-width: 1399px');
    let mq800to1199 = window.matchMedia('(min-width: 800px) and (max-width: 1199px');
    let mq600to799 = window.matchMedia('(min-width: 600px) and (max-width: 799px');


    ////////OVER 1600////////
    //////////////////////////////////

    function mq1(e) {
        if (e.matches) {
            console.log('over 1600 works');

            ////////graphic design side
            tlPeekInR.from('.intro__img--sideways', .8, {
                x: 310
            })
            ////////graphic design side
            tlPeekInR.from('.section__subtitle--gd', 1, {
                x: 500
            }, '-=.8')

            ////////front end side
            tlPeekInL.from('.intro__img--silly', .8, {
                x: -340,
                rotate: 40,
            })
            ////////front end side
            tlPeekInL.to('.section__subtitle--fed', 1, {
                x: 500,
            }, '-=.8')

            PeekInPlay();
        }
    }
    mq1(mq1600andup);
    mq1600andup.addEventListener('change', mq1);


    //////// OVER 1400 ////////
    //////////////////////////////////

    function mq2(e) {
        if (e.matches) {
            console.log('over 1400 works');

            ////////graphic design side
            tlPeekInR.from('.intro__img--sideways', .8, {
                x: 310
            })
            ////////graphic design side
            tlPeekInR.from('.section__subtitle--gd', 1, {
                x: 500
            }, '-=.8')

            ////////front end side
            tlPeekInL.from('.intro__img--silly', .8, {
                x: -340,
                rotate: 40,
            })
            ////////front end side
            tlPeekInL.to('.section__subtitle--fed', 1, {
                x: 400,
            }, '-=.8')

            PeekInPlay();
        }
    }
    mq2(mq1400to1599);
    mq1400to1599.addEventListener('change', mq2);


    //////// OVER 1200 ////////
    //////////////////////////////////

    function mq3(e) {
        if (e.matches) {
            console.log('over 1200 works');

            ////////graphic design side
            tlPeekInR.from('.intro__img--sideways', .8, {
                x: 310
            })
            ////////graphic design side
            tlPeekInR.from('.section__subtitle--gd', 1, {
                x: 330
            }, '-=.8')

            ////////front end side
            tlPeekInL.from('.intro__img--silly', .8, {
                x: -340,
                rotate: 40,
            })
            ////////front end side
            tlPeekInL.to('.section__subtitle--fed', 1, {
                x: 250,
            }, '-=.8')

            PeekInPlay();
        }
    }
    mq3(mq1200to1399);
    mq1200to1399.addEventListener('change', mq3);


    //////// OVER 800 ////////
    //////////////////////////////////

    function mq4(e) {
        if (e.matches) {
            console.log('over 800 works');

            ////////graphic design side
            tlPeekInR.from('.intro__img--sideways', .8, {
                x: 210
            })
            ////////graphic design side
            tlPeekInR.from('.section__subtitle--gd', 1, {
                x: 230
            }, '-=.8')

            ////////front end side
            tlPeekInL.from('.intro__img--silly', .8, {
                x: -240,
                rotate: 40,
            })
            ////////front end side
            tlPeekInL.to('.section__subtitle--fed', 1, {
                x: 150,
            }, '-=.8')

            PeekInPlay();
        }
    }
    mq4(mq800to1199);
    mq800to1199.addEventListener('change', mq4);


    //////// OVER 600 ////////
    //////////////////////////////////

    function mq5(e) {
        if (e.matches) {
            console.log('over 600 works');

            //////graphic design side
            tlPeekInR.from('.intro__img--sideways', .8, {
                x: 150
            })
            ////////graphic design side
            tlPeekInR.from('.section__subtitle--gd', 1, {
                x: 180
            }, '-=.8')

            ////////front end side
            tlPeekInL.from('.intro__img--silly', .8, {
                x: -170,
                rotate: 40,
            })
            ////////front end side
            tlPeekInL.to('.section__subtitle--fed', 1, {
                x: 150,
            }, '-=.8')

            PeekInPlay();
        }
    }
    mq5(mq600to799);
    mq600to799.addEventListener('change', mq5);


    //////// UNDER 600 ////////
    //////////////////////////////////

    ScrollTrigger.matchMedia({
        '(max-width: 600px)': function () {
            console.log('under 600 works');

            //////graphic design side
            gsap.from('.intro__img--sideways', .8, {
                x: 150,
                duration: 2,
                scrollTrigger: {
                    trigger: ".intro",
                    toggleActions: 'restart reverse restart reverse'
                }
            })
            ////////graphic design side
            gsap.from('.section__subtitle--gd', 1, {
                x: 180,
                duration: 2,
                scrollTrigger: {
                    trigger: ".intro",
                    toggleActions: 'restart reverse restart reverse'
                }
            }, '-=.8')

            ////////front end side
            gsap.from('.intro__img--silly', .8, {
                x: -170,
                rotate: 40,
                duration: 3,
                scrollTrigger: {
                    trigger: ".section__title--intro",
                    start: 'bottom bottom',
                    toggleActions: 'restart reverse restart reverse'
                }
            })
            ////////front end side
            gsap.to('.section__subtitle--fed', 1, {
                x: 150,
                duration: 3,
                scrollTrigger: {
                    trigger: ".section__title--intro",
                    start: 'bottom bottom',
                    toggleActions: 'restart reverse restart reverse',
                }
            }, '-=.8')

            tlPeekInR.play();
            tlPeekInL.play();
        }
    });


    ////////WHAT I DO section animations

    ScrollTrigger.matchMedia({
        '(min-width: 1100px)': function () {
            gsap.from('.whatIdo__descriptions--each', {
                x: -2000,
                duration: 3,
                opacity: .5,
                stagger: -.3,
                scrollTrigger: {
                    trigger: ".whatIdo__descriptions",
                    start: 600,
                    toggleActions: 'restart reverse restart reverse',
                    // markers: true
                    // markers: {
                    //     startColor: 'yellow',
                    //     endColor: 'lime',
                    //     fontSize: '2em',
                    //     indent: 200
                    // }
                }
            })
        },

        '(max-width: 1099px)': function () {
            gsap.from('.whatIdo__descriptions--each', {
                x: -1000,
                duration: 2.5,
                opacity: .5,
                stagger: .3,
                scrollTrigger: {
                    trigger: ".whatIdo__descriptions",
                    toggleActions: 'restart reverse restart reverse',
                }
            })
        }
    })

    ////////about section animations
    gsap.from('.section__subtitle--about', {
        x: 1000,
        duration: 2.5,
        scrollTrigger: {
            trigger: ".section__subtitle--about",
            toggleActions: 'restart reverse restart reverse'
        }
    })

    gsap.from('.section__title--about', {
        x: -500,
        duration: 1.4,
        scrollTrigger: {
            trigger: '.section__subtitle--about',
            toggleActions: 'restart reverse restart reverse'
        }
    })

    gsap.from('.about-me__body p', {
        opacity: 0,
        duration: 4,
        stagger: true,
        scrollTrigger: {
            trigger: '.about-me__body',
            toggleActions: 'restart reverse restart reverse',
        }
    })

    ////////peek-a-boo image
    gsap.from('.my-work__img', {
        y: 300,
        duration: 1.4,
        scrollTrigger: {
            trigger: ".section__subtitle--tagline",
            toggleActions: 'restart reverse restart reverse',
        }
    })
}); //document.ready closing
// console.log(window.location.href);