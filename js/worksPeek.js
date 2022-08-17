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

 
 ////////WORKS head peek

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
    }); //document.ready closing
