gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollToPlugin);
//adds or removes .nav-open which adds position fixed to hamburger
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
// const addZindex = document.querySelector('.intro');
// console.log(addZindex);

navToggle.addEventListener('click', () => {
    //*brings sections to the top of .nav so hovering works, then js brings it back to 0 when nav menu appears*
    document.body.classList.toggle('nav-open');
    if (document.body.classList.contains('nav-open')){
    $('.portfolio').css('z-index', '0');
    $('footer').css('z-index', '0');
    $('section').css('z-index', '0');    
    } else {
        //*brings section to the top of .nav so hovering works, then js brings it back to 0 when nav menu appears*
        window.setTimeout(function(){
            $('.portfolio').css('z-index', '100');
            $('section').css('z-index', '100');
            $('footer').css('z-index', '100');
        }, 3000);
    }
    // document.addZindex.css('z-index', '100');
    // $('.intro').css('z-index', '0');
});

///////removes nav-open so flyout disappears 
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});


//DELETE - doesnt work - go to section
// const works = document.querySelector('.btn');
// console.log(works);

// works.onclick = function(e) {
//     e.preventDefault();
//     document.getElementById('whatIdo').scrollIntoView({
//         behavior: 'smooth'
//     });
// }

// for animated flyout menu
$(document).ready(function () {

////////move hover bar on mouse move
    $(window).mousemove(function (e) {
        var y = e.clientY;
        // console.log(y);
        $('.nav__item--hover-element').css('margin-top', y);
    });

////////changes the images on hover of menu links
    $('.nav__link').mouseover(function() {
        var activeLinkId = $(this).attr('href');
        // console.log(activeLinkId);//shows that when hover which links are active
        $('.nav__img--link-img').removeClass('active');
        $('.nav__img--link-img' + activeLinkId).addClass('active');
    });

    // var toggleBtn = document.querySelector('.nav-toggle');//using const navToggle instead (above)

    var tlPeekInR = new TimelineMax({paused: true});
    var tlPeekInL = new TimelineMax({paused: true});
    // var tlPeekInBoth = new TimelineMax({paused: true});

////////graphic design side
    tlPeekInR.from('.intro__img--sideways', .8, {
        x: 310
    })

    tlPeekInR.from('.section__subtitle--gd', 1,{
        x: 650
    }, '-=.8')

    $(document).on('mouseenter', ".intro__gd", function(){
        tlPeekInR.play();
    }).on('mouseleave', '.intro__gd', function(){
        tlPeekInR.reverse();
    });

////////front end side
    tlPeekInL.from('.intro__img--silly', .8, {
        x: -340,
        rotate: 40,
    })

    tlPeekInL.from('.section__subtitle--fed', 1, {
        x: -600,
    }, '-=.8')

    $(document).on('mouseenter', ".intro__fed", function(){
        tlPeekInL.play();
    }).on('mouseleave', '.intro__fed', function(){
        tlPeekInL.reverse();
    });

//////////////////////both graphic design and front end at same time
// tlPeekInBoth.from('.intro__img--sideways', .8, {
//     x: 310
// })

// tlPeekInBoth.from('.section__subtitle--gd', 1,{
//     x: 650
// }, '-=.8')

// tlPeekInBoth.from('.intro__img--silly', .8, {
//     x: -340,
//     rotate: 40,
// }, '-=1.8')

// tlPeekInBoth.from('.section__subtitle--fed', 1, {
//     x: -600,
// }, '-=2.6')


////////on hover of h1 - both graphic design and front end dev slides in
$(document).on('mouseover', ".section__title--intro", function(){
    tlPeekInR.play();
    tlPeekInL.play();
}).on('mouseout', '.section__title--intro', function(){
    tlPeekInR.reverse();
    tlPeekInL.reverse();
});




////////WHAT I DO section animations
        // tlBlurbs = new TimelineMax();
        
        gsap.from('.whatIdo__descriptions--each', {
            x: -2000,
            duration: 3,
            opacity: .5,
            stagger: -.3,
            scrollTrigger:  {
                trigger: ".whatIdo__descriptions",
                start: 600,
                toggleActions: 'restart none none none',
                // markers: true
                // markers: {
                //     startColor: 'yellow',
                //     endColor: 'lime',
                //     fontSize: '2em',
                //     indent: 200
                // }
            }
        })

////////about section animations
        gsap.from('.section__subtitle--about', {
            x: 1000,
            duration: 3,
            scrollTrigger: {
                trigger: ".section__subtitle--about", 
                toggleActions: 'restart none none none'
            }
        })

        gsap.from('.section__title--about', {
            x: -500,
            duration: 1.4,
                scrollTrigger: {
                trigger: '.section__subtitle--about',
                toggleActions: 'restart none none none'
            }
        })

        gsap.from('.about-me__body', {
            opacity: 0,
            duration: 4,
            stagger: true,
            scrollTrigger: {
                trigger: '.about-me__body',
                toggleActions: 'restart none none none',
                // markers: {
                //     startColor: 'fuschia',
                //     endColor: 'white'
                // }
            }
        })

////////peek-a-boo image
        gsap.from('.my-work__img', {
            y: 300,
            duration: 1.4,
            scrollTrigger: {
                trigger: ".section__subtitle--tagline",
                toggleActions: 'restart reverse restart reverse',
                // markers: {
                //     startColor: 'yellow',
                //     endColor: 'lime',
                //     fontSize: '2em',
                //     indent: 200
                // }
            }
        })
});//document.ready closing
    // console.log(window.location.href);

// let navLink = $('.nav__link');
// let hover =
//     //changes an image when hover over menu item
//     tl.from('.nav__img', 1.4, {
//         x: 1000,
//     })

// navLink.addEventListener('mouseenter', () => hover.play());
// navLink.addEventListener('mouseleave', () => hover.reverse());

