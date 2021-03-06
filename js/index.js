gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollToPlugin);

//adds or removes .nav-open which adds position fixed to hamburger
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    //*brings nav items to the top (forefront) of .nav so hovering works when nav menu appears*
    //DELETE puts sections behind nav items (to -1)
    //menu open
    document.body.classList.toggle('nav-open');
    if (document.body.classList.contains('nav-open')) {
        $('.nav__item').css('z-index', '1000');
        $('.nav__item--hover-element').css('z-index', '999');
        // $('.portfolio').css('z-index', '-1');
        // $('footer').css('z-index', '-1');
        // $('section').css('z-index', '-1');
        // $('header').show();
        // $('.portfolio').hide();
        // $('footer').hide();
        // $('section').hide();
        
    } else {
        //*brings  sections back to forefront (1000) when nav menu disappears*
        //only is for timing*****
        //menu closed
        window.setTimeout(function () {
            // $('.nav__item').hide();
            // $('.portfolio').css('z-index', '1000');
            // $('.section').css('z-index', '1000');
            // $('footer').css('z-index', '1000');


            // $('header').hide();
            // $('.portfolio').show();
            // $('section').show();
            // $('footer').show();
        }, 3000);
    }
});

///////removes nav-open so flyout disappears - menu closed
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        //disable scrollup nav appear
        pauseNavAppearOnScrollup();

        //re enable scrollup nav appear 
        window.setTimeout(function () {
            navAppearOnScrollup();
        }, 3000);

        //reverts nav items back to -1
        // $('.nav__item').css('z-index', '-1');
        // $('.nav__item--hover-element').css('z-index', '-2');


        //         $('header').show();
        // $('.portfolio').hide();
        // $('footer').hide();
        // $('section').hide();

    })
});

////////changes the images on hover of menu links
$('.nav__link').mouseover(function () {
    var activeLinkId = $(this).attr('data-target');
    // console.log(activeLinkId);//shows that when hover which links are active
    $('.nav__img--link-img').removeClass('active');
    $('.nav__img--link-img' + activeLinkId).addClass('active');
});

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
        $(document).on('mouseover', ".intro--kk-hover", function () {
            tlPeekInR.play();
            tlPeekInL.play();
        }).on('mouseout', '.intro--kk-hover', function () {
            tlPeekInR.reverse();
            tlPeekInL.reverse();
        });
    }

    ////////MQs for PEEK A BOO
    let mq1600andup = window.matchMedia('(min-width: 1600px)');
    let mq1400to1599 = window.matchMedia('(min-width: 1400px) and (max-width: 1599px');
    let mq1100to1399 = window.matchMedia('(min-width: 1101px) and (max-width: 1399px');
    let mq769to1099 = window.matchMedia('(min-width: 769px) and (max-width: 1099px');
    let mq575to768 = window.matchMedia('(min-width: 575px) and (max-width: 768px');


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


    //////// OVER 1100 ////////
    //////////////////////////////////

    function mq3(e) {
        if (e.matches) {
            console.log('over 1100 works');

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
    mq3(mq1100to1399);
    mq1100to1399.addEventListener('change', mq3);


    //////// OVER 769 ////////
    //////////////////////////////////

    function mq4(e) {
        if (e.matches) {
            console.log('over 769 works');

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
    mq4(mq769to1099);
    mq769to1099.addEventListener('change', mq4);


    //////// OVER 575 ////////
    //////////////////////////////////

    function mq5(e) {
        if (e.matches) {
            console.log('over 575 works');

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
    mq5(mq575to768);
    mq575to768.addEventListener('change', mq5);


    //////// UNDER 574 ////////
    //trigger by scroll not hover
    //////////////////////////////////

    ScrollTrigger.matchMedia({
        '(max-width: 574px)': function () {
            console.log('under 574 works');

            //////graphic design side
            gsap.from('.intro__img--sideways', .8, {
                x: 100,
                duration: 2,
                scrollTrigger: {
                    trigger: ".intro-gd",
                    toggleActions: 'restart reverse restart reverse',
                    // markers: true,
                    // markers: {
                    //     startColor: 'blue',
                    //     endColor: 'green',
                    //     fontSize: '1em',
                    //     indent: 200
                    // }
                }
            })
            ////////graphic design side
            gsap.from('.section__subtitle--gd', 1, {
                x: 180,
                duration: 2,
                scrollTrigger: {
                    trigger: ".intro-fed",
                    toggleActions: 'restart reverse restart reverse',
                    // markers: true,
                    // markers: {
                    //     startColor: 'orange',
                    //     endColor: 'yellow',
                    //     fontSize: '1em',
                    //     indent: 200
                    // }
                }
            }, '-=.8')

            ////////front end side
            gsap.from('.intro__img--silly', .8, {
                x: -170,
                rotate: 40,
                duration: 3,
                scrollTrigger: {
                    trigger: ".intro-fed",
                    start: 'bottom bottom',
                    toggleActions: 'restart reverse restart reverse'
                }
            })
            ////////front end side
            gsap.to('.section__subtitle--fed', 1, {
                x: 150,
                duration: 3,
                scrollTrigger: {
                    trigger: ".intro-fed",
                    start: 'bottom bottom',
                    toggleActions: 'restart reverse restart reverse',
                }
            }, '-=.8')

            tlPeekInR.play();
            tlPeekInL.play();
        }
    });

    ////////WORKS section animations
    gsap.from('.section__subtitle--works', {
        x: 1200,
        duration: 2.5,
        scrollTrigger: {
            trigger: ".section__subtitle--works",
            toggleActions: 'restart reverse restart reverse',
            // markers: true,
            // markers: {
            //     startColor: 'white',
            //     endColor: 'gray',
            //     fontSize: '1em',
            //     indent: 200
            // }

        }
    })

    gsap.from('.section__title--works', {
        x: -1200,
        duration: 1.4,
        scrollTrigger: {
            trigger: '.section__subtitle--works',
            toggleActions: 'restart reverse restart reverse',
        }
    })

        //////WORKS peek-a-boo image
        //scroll down img goes up
        gsap.from('.my-work__img', {
            y: 290,
            // opacity: 0,
            duration: 2.5,
            scrollTrigger: {
                trigger: ".work-created",
                toggleActions: 'restart none restart reverse',
                // markers: true,
                // markers: {
                //     startColor: 'blue',
                //     endColor: 'green',
                //     fontSize: '1em',
                //     indent: 200
                // }
            }
        })

        //back to 0 so can replay on scroll up
        gsap.from('.my-work__img', {
            y: 0,
            // opacity: 0,
            duration: 2.5,
            scrollTrigger: {
                trigger: '.about-me',
                toggleActions: 'restart none none none',
                // markers: true,
                // markers: {
                //     startColor: 'orange',
                //     endColor: 'yellow',
                //     fontSize: '1em',
                //     indent: 200
                // }
    
    
            }
        })


//scroll up img goes up again
        gsap.from('.my-work__img', {
            y: 290,
            // opacity: 0,
            duration: 2.5,
            scrollTrigger: {
                trigger: '.section__subtitle--works',
                toggleActions: 'none none restart reverse',
                // markers: true,
                // markers: {
                //     startColor: 'red',
                //     endColor: 'pink',
                //     fontSize: '1em',
                //     indent: 200
                // }
    
    
            }
        })
    

    ////////WHAT I DO section animations
    gsap.from('.section__title--whatIdo', {
        x: -2000,
        duration: 1.4,
        scrollTrigger: {
            trigger: '.whatIdo__descriptions--each',
            toggleActions: 'restart reverse restart reverse'
        }
    })

    ScrollTrigger.matchMedia({
        '(min-width: 1100px)': function () {
            gsap.from('.whatIdo__descriptions--each', {
                x: 2000,
                duration: 3,
                opacity: .5,
                stagger: -.1,
                scrollTrigger: {
                    trigger: ".whatIdo",
                    // start: 600,//removed when rearranged sections
                    toggleActions: 'restart reverse restart reverse',
                }
            })
        },

        '(max-width: 1099px)': function () {
            gsap.from('.whatIdo__descriptions--each', {
                x: 1000,
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

    ////////WHO I AM section animations
    gsap.from('.section__subtitle--about', {
        x: -1200,
        duration: 2.5,
        scrollTrigger: {
            trigger: ".section__subtitle--about",
            toggleActions: 'restart reverse restart reverse'
        }
    })

    gsap.from('.section__title--about', {
        x: 2000,
        duration: 1.4,
        scrollTrigger: {
            trigger: '.section__subtitle--about',
            toggleActions: 'restart reverse restart reverse'
        }
    })

//////// WHO I AM image slide in
// OVER 1100 ///////
    ScrollTrigger.matchMedia({
        '(min-width: 1101px)': function () {
    gsap.from('.section__image--about', {
        x: -340,
        rotate: 40,
        duration: .8,
        scrollTrigger: {
            trigger: '#whoIam-img-trigger',
            toggleActions: 'restart none restart reverse',
        }
    })
    gsap.from('.section__image--about', {
        marker: true,
        x: 0,
        rotate: -40,
        duration: .8,
        scrollTrigger: {
            trigger: '.whatIdo',
            toggleActions: 'restart none none none',
        }
    })
    gsap.from('.section__image--about', {
        x: -340,
        rotate: 40,
        duration: .8,
        scrollTrigger: {
            trigger: '.about-me',
            toggleActions: 'none none restart reverse',
        }
    })
},

// 800 to 1199 ///////
        '(min-width: 801px and max-width: 1199px)': function () {
            gsap.from('.section__image--about', {
                x: -220,
                rotate: 40,
                duration: .8,
                scrollTrigger: {
                    trigger: '#whoIam-img-trigger',
                    toggleActions: 'restart none restart reverse',
                    // markers: true,
                    // markers: {
                    //     startColor: 'blue',
                    //     endColor: 'green',
                    //     fontSize: '1em',
                    //     indent: 200
                    // }

                }
            })
            gsap.from('.section__image--about', {
                marker: true,
                x: 0,
                rotate: -40,
                duration: .8,
                scrollTrigger: {
                    trigger: '.whatIdo',
                    toggleActions: 'restart none none none',
                    // markers: true,
                    // markers: {
                    //     startColor: 'orange',
                    //     endColor: 'yellow',
                    //     fontSize: '1em',
                    //     indent: 200
                    // }

                }
            })
            gsap.from('.section__image--about', {
                x: -220,
                rotate: 40,
                duration: .8,
                scrollTrigger: {
                    trigger: '.about-me',
                    toggleActions: 'none none restart reverse',
            //                                                     markers: true,
            // markers: {
            //     startColor: 'red',
            //     endColor: 'pink',
            //     fontSize: '1em',
            //     indent: 200
            // }

                }
            })
        },

        // UNDER 800
        '(max-width: 800px)': function () {
            gsap.from('.section__image--about', {
                x: -155,
                rotate: 40,
                duration: .8,
                scrollTrigger: {
                    trigger: '.section__subtitle--about',
                    toggleActions: 'restart none restart reverse',
                    // markers: true,
                    // markers: {
                    //     startColor: 'blue',
                    //     endColor: 'green',
                    //     fontSize: '1em',
                    //     indent: 200
                    // }
                }
            })
            gsap.from('.section__image--about', {
                marker: true,
                x: 0,
                rotate: -40,
                duration: .8,
                scrollTrigger: {
                    trigger: '.whatIdo',
                    toggleActions: 'restart none none none',
                    // markers: true,
                    // markers: {
                    //     startColor: 'orange',
                    //     endColor: 'yellow',
                    //     fontSize: '1em',
                    //     indent: 200
                    // }
        
                }
            })
            gsap.from('.section__image--about', {
                x: -155,
                rotate: 40,
                duration: .8,
                scrollTrigger: {
                    trigger: '.about-me',
                    toggleActions: 'none none restart reverse',
                    // markers: true,
                    // markers: {
                    //     startColor: 'red',
                    //     endColor: 'pink',
                    //     fontSize: '1em',
                    //     indent: 200
                    // }
        
                }
            })
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



//     gsap.to('.my-work__img', {
// // opacity: 0,
//         y: 300,
//         duration: 2,
//         scrollTrigger: {
//             trigger: ".animation-start",
//             toggleActions: 'reverse none none none',
//                                 markers: true,
//                     markers: {
//                         startColor: 'yellow',
//                         endColor: 'lime',
//                         fontSize: '2em',
//                         indent: 200
//                     }

//         }
        
//     })


// image-tilt onScroll 
// Portfolio Pages

gsap.to('#scroll', {
    rotation: 16,
    // skewX: -10,
    xPercent: -10,
     x: 0,
    //  opacity: .6,
    scale: 1,
    scrollTrigger: {
        trigger: ".portfolio__part--right",
        start: 'top 50%',
        // end: 'top -10%',
        scrub: true,
        toggleActions: 'restart reverse restart reverse',
        // markers: {
        //     startColor: 'red',
        //     endColor: 'purple',
        //     fontSize: '1em',
        //     indent: 200
        // }
    }
})


// gsap.from('#scroll', {
//     rotation: 0,
//     // skewX: 10,
//      x: -50,
//     scale: 1,
//     scrollTrigger: {
//         trigger: ".portfolio__part--right",
//         start: 'top 0%',
//         end: 'top 80%',
//         scrub: true,
//         toggleActions: 'restart reverse restart reverse',
//         markers: {
//             startColor: 'yellow',
//             endColor: 'green',
//             fontSize: '1em',
//             indent: 200
//         }
//     }
// })





}); //document.ready closing
// console.log(window.location.href);