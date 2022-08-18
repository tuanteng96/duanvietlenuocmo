$(document).ready(function () {

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll > 200) {
            $(".header").addClass("header-fixed animate__fadeInDown");
        } else {
            if ($(".header").hasClass("header-fixed")) {
                $(".header").removeClass("header-fixed animate__fadeInDown");
            }
        }
    });

    $('.slider-enterprise').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ['<i class="fa-regular fa-angle-left"></i>', '<i class="fa-regular fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 3,
                margin: 15,
            },
            768: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    });

    $('.slider-adviser').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        navText: ['<i class="fa-regular fa-angle-left"></i>', '<i class="fa-regular fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
                margin: 0,
            },
            768: {
                items: 2
            },
            993: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    $('.slider-school-partner').each(function () {
        var $this = $(this);
        var $item = $('.item', $this);
        var numberItemChild = 10;
        if ($(document).width() < 992) {
            numberItemChild = 8;
        }
        if ($(document).width() < 767) {
            numberItemChild = 4;
        }
        var wrapper = '<div class="slider-item"></div>';
        $this.addClass('owl-carousel');
        for (var i = 0; i < $item.length; i += numberItemChild) {
            $item.slice(i, i + numberItemChild).wrapAll(wrapper);
        }
        $this.owlCarousel({
            items: 1,
            dots: false,
            nav: false,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
        });

        $(".btn-menu").click(function (e) {
            $(".header-nav").toggle();
            e.stopPropagation();
        });

        $(document).click(function (e) {
            if (!$(e.target).is('.header-nav, .header-nav *')) {
                $(".header-nav").hide();
            }
        });
    })

    $('#footer-contact').submit(function(e) {
        e.preventDefault();
        $("#footer-contact").validate({
            // onfocusout: false,
            // onkeyup: false,
            // onclick: false,
            rules: {
                "name": {
                    required: true
                },
                "phone": {
                    required: true
                }
            },
            submitHandler: function(form) {
                console.log($(form).find("input[name='name']").val())
            }
        });
    });
})