jQuery(document).ready(function () {
    $('.header-banner--slick').slick({
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });
    $('.services-slick').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.work-main--block__slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        // responsive: [
        //     {
        //         breakpoint: 700,
        //         settings: "unslick"
        //     }
        // ]
    });
    $('.work-block--lists__slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });
});


// $(document).ready(function () {
//     $(window).on('load resize', function () {
//         if ($(window).width() < 700) {
//             $(".work-main--block__slick.slick-initialized").slick("unslick");
//             $('.work-block--lists__slick:not(.slick-initialized)').slick({
//                 infinite: true,
//                 slidesToShow: 1
//             });
//         } else {
//             $('.work-main--block__slick:not(.slick-initialized)').slick({
//                 infinite: true,
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 arrows: true,
//                 dots: true
//             });
//             $(".work-block--lists__slick.slick-initialized").slick("unslick");
//         }
//     });
// });


jQuery(document).ready(function () {
    /** work block */

    $('.work-block--lists').on('click', 'li', function(){
        let lindex = $(this).index();
        $( ".work-main--block__slick" ).slick('slickGoTo', parseInt(lindex));
        $('.work-block--lists li').removeClass('active');
        $(this).addClass('active');
        $('.work-block--lists__slick li').removeClass('active');
        $(this).addClass('active');
    });
    $('.work-block--lists__slick').on('click', 'li', function(){
        let lindex = $(this).index();
        $( ".work-main--block__slick" ).slick('slickGoTo', parseInt(lindex));
        $('.work-block--lists__slick li').removeClass('active');
        $(this).addClass('active');
    });
    $('.work-main--block__slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
        let slideIndex = $(this).index();
        $('.work-block--lists li').removeClass('active');
        $('.work-block--lists li').eq(currentSlide).addClass('active');
        // $('.work-block--lists__slick li').removeClass('active');
        // $('.work-block--lists__slick li').eq(currentSlide).addClass('active');
    });

    /** our-park--block */
    $(".our-park--slick").on("init", function (event, slick) {
        addCustomSlickAttributes();
    });

    $('.our-park--slick').slick({
        infinite: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $(".our-park--slick").on("afterChange", function (event, slick, current_slide_index, next_slide_index) {
        addCustomSlickAttributes();
    });

    function addCustomSlickAttributes() {

        $("[data-my-slick-attr]").removeAttr("data-my-slick-attr");

        $(".slick-active").each(function (index, el) {

            $(el).attr("data-my-slick-attr", index);
            if ($(el).attr("data-my-slick-attr") == 3) {
                $(this).find('.our-park--btn').css('display', 'block');
            }
            else {
                $(this).find('.our-park--btn').css('display', 'none');
            }
        })
    }


    /** Mob menu toogle */
    const overlay = jQuery('.overlay');
    const catalog = jQuery('.catalog');
    const btnBurger = jQuery('.nav-icon-5');
    const btnClose = jQuery('.open');
    btnBurger.click(function () {
        catalog.toggleClass('open');
        overlay.toggleClass('active');
    });
    overlay.click(function () {
        overlay.toggleClass('active');
        catalog.toggleClass('open');
        btnBurger.removeClass('open');
    });
    btnClose.click(function () {
        catalog.toggleClass('open');
        overlay.toggleClass('active');
    });
});

/** mobile-memu */
const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
    });
});

/** fixed menu */
const nav = $('.header-wrapper');
$(window).scroll(function () {
    if ($(this).scrollTop() > 130) {
        nav.addClass("f-nav");
    } else {
        nav.removeClass("f-nav");
    }
});

/** phoneBtn block */
const phoneBtn = document.querySelector('.header-phone--wrapp');
phoneBtn.addEventListener('click', (event) => {
    if ($(".header-phone").is(":visible")) {
        $('.header-phone').css('display', 'none');
    } else {
        $('.header-phone').css('display', 'block');
    }     
});
;
jQuery(document).ready(function(){
    /** account block item */
    const accountItem = $('.account-item');
    
    
    accountItem.click(function(e) {
        if (!e.target.classList.contains('account-item--active')) {
            accountItem.each(function(i, elem) {
                if (elem.classList.contains('account-item--active')) {
                    elem.classList.remove('account-item--active');
                    elem.classList.remove('account-icon--active');
                }
            });
            e.target.classList.add('account-item--active');
            e.target.classList.add('account-icon--active');
        }
    });
});;
