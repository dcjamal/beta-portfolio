/**
 * Project: Dci Portolio Project
 * Description: Initialize all scripts and add custom js. 
 * Author: J.Atmaca
 * License: GPL
 * Version: 1.0.0
 */


(function ($) {
    'use strict';

    $(document).ready(function ($) {

        // Banner Slider
        $('.slider-active').owlCarousel({
            loop: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            responsiveClass: true,
            nav: true,
            autoplayTimeout: 5000,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

        // Nobile Menu
        // Add dark overlay to content
        $('body').append('<div class="dci-sidr-overlay hidden"></div>');
        var $sidrOverlay = $('.dci-sidr-overlay');

        $('#mobile-menu').sidr({
            name: 'sidr-main',
            source: '#site-navigation',
            onOpen: function () {
                // FadeIn Overlay
                $sidrOverlay.fadeIn(300);

                // Close when clicking on overlay
                $('.dci-sidr-overlay').on('click', function (event) {
                    $.sidr('close', 'sidr-main');
                    return false;
                });
                
                // Close when clicking a link
                $('li.sidr-class-menu-item > a', '#sidr-main').click(function () {
                    $.sidr('close', 'sidr-main');
                    return false;
                });

            },
            onClose: function () {

                // FadeOut overlay
                $sidrOverlay.fadeOut(300);
            }
        });

        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 0
                    }, 'slow');
                    return false;
                }
            }
        });

        $(window).on('load', function () {
            var portfolioFilters = $('.filters li'),
                    portfolioItem = $('#isotope-grid');
            if (portfolioFilters != 'undefined') {
                portfolioItem.isotope({
                    itemSelector: '.grid-item',
                    layoutMode: 'masonry',
                    masonry: {
                        columnWidth: '.grid-item',
                        gutter: 10
                    }
                });
                portfolioFilters.on('click', function () {
                    portfolioFilters.removeClass('active');
                    $(this).addClass('active');
                    var selector = $(this).attr('data-filter');
                    portfolioItem.isotope({
                        filter: selector
                    });
                    return false;
                });
            }
        });


    });
})(jQuery);