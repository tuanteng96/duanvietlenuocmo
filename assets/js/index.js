$(document).ready(function() {
    $('.slide-enterprise').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        navText: ['<i class="fa-regular fa-angle-left"></i>', '<i class="fa-regular fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $('.slider-school-partner').each(function() {
        var $this = $(this);
        var $item = $('.item', $this);
        var numberItemChild = 10;
        var wrapper = '<div class="slider-item"></div>';
        $this.addClass('owl-carousel');
        for (var i = 0; i < $item.length; i += numberItemChild) {
            $item.slice(i, i + numberItemChild).wrapAll(wrapper);
        }
        $this.owlCarousel({
            items: 1,
            dots: false,
            nav: false
        });
    })
})