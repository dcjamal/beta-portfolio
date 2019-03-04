/**
 * Project: Dci Portolio Project
 * Description: Initialize all scripts and add custom js. 
 * Author: J.Atmaca
 * License: GPL
 * Version: 1.0.0
 */


(function ($) {
    'use strict';

    // variables
    var
            $window = $(window),
            $document = $(document),
            $windowWidth = $(window).width(),
            $windowHeight = $(window).height(),
            $windowTop = $(window).scrollTop(),
            $mobileBreakpoint = 959;


    // Header Sticky
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header-sticky-wrapper').addClass('is-sticky').removeClass('not-sticky');
        } else {
            $('#header-sticky-wrapper').removeClass('is-sticky').addClass('not-sticky');
        }
    });

    $(document).ready(function ($) {
        //  variables
        var
                $html = $('html'),
                $body = $('body'),
                $header = $('#site-header'),
                $siteNavWrap = $('#site-navigation-wrap');

        /**
         * Sticky Header
         *
         * @since 1.0.0
         */

        var $stickyWrap = $('<div id="header-sticky-wrapper" class="not-sticky">'); // Add a stciky wrapper to the header

        $('#site-header').wrapAll($stickyWrap); // Wrap the $stickyWrap on header

        /**
         * Slider
         *
         * @since 1.0.0
         */
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

        /**
         * Mobile Menu
         *
         * @since 1.0.0
         */

        // build div#sidr with close button inside
        var sidrDiv = $('<div id="sidr-close"><div class="dci-close"><a href="#" role="button">x</a></div></div>');

        // insert our div#sidr into DOM
        $body.append(sidrDiv);

        // Add dark overlay to content
        $body.append('<div class="dci-sidr-overlay dci-hidden"></div>');
        var $sidrOverlay = $('.dci-sidr-overlay');


        $('#mobile-menu').sidr({
            name: 'sidr-main',
            source: '#sidr-close, #site-navigation',
            bind: 'click',
            displace: false,
            onOpen: function () {

                // FadeIn Overlay
                $sidrOverlay.fadeIn(200);

                // Close sidr when clicking on overlay
                $('.dci-sidr-overlay').on('click', function (event) {
                    $.sidr('close', 'sidr-main');
                    return false;
                });


                // Prevent body scroll
                // $body.addClass('dci-blockscroll');



            },
            onClose: function () {

                // FadeOut overlay
                $sidrOverlay.fadeOut(100);

                // Prevent body scroll
                // $body.removeClass('dci-blockscroll');

            }
        });


        // Close when clicking a link
        $('li.sidr-class-menu-item > a', '#sidr-main').click(function () {
            $.sidr('close', 'sidr-main');
        });

        // Close mobile menu when clicking X toggle
        $('.sidr-class-dci-close > a', '#sidr-main').on('click', function (e) {
            e.preventDefault();
            $.sidr('close', 'sidr-main');
        });

    });

    // Run on Window Load
    $window.on('load', function () {

        /**
         * Portfolio
         * 
         *
         * @since 1.0.0
         */
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

    $window.resize(function () {
        if ($window.width() >= $mobileBreakpoint) {
            $.sidr('close', 'sidr-main');
        }
    });

})(jQuery);