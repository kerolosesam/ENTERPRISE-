/*global $*/

$(function () {
  
    'use strict';
    
    // Loading Screen
    
    
    // Show Input Search Only
        
    $('.navbar-form .form-control').click(function () {
           
        $('.nav > li').addClass('st-hide');
        $('.navbar-default .fa-close').css('display', 'block');
        $('.navbar-default .fa-search').css('color', 'rgba(0, 0, 255, 0.41)');
    });
    
    $('.navbar-default .fa-close').click(function () {
       
        $('.nav > li').removeClass('st-hide');
        $(this).css('display', 'none');
        $('.navbar-default .fa-search').css('color', '#888');
    });
    
    // SlideUp For any Div When Click on Body
    
    $('html').click(function () {
        if ($('.log-in').is(":visible")) {
            $('.log-in').slideUp();
        }
    });
    
    $('.sign-in').click(function () {
        $('.log-in').slideToggle();
    });
    
    $('.sign-in, .log-in').click(function (event) {
        event.stopPropagation();
    });
    
    $('html').click(function () {
        if ($('.register').is(":visible")) {
            $('.register').slideUp();
        }
    });
    
    $('.sign-up').click(function () {
        $('.register').slideToggle();
    });
    
    $('.sign-up, .register').click(function (event) {
        event.stopPropagation();
    });
    
    
    // Hover on picture our work
    
    $(".hover").mouseleave(function () {
        $(this).removeClass("hover");
    });
    
    // Trigger Slider Testimoinals
    
    $('.testimoinals-slider .owl-carousel').owlCarousel({
        //loop: true,
        //margin: 10,
        nav: true,
        loop: true,
        margin: 2,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"</i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 2,
                nav: true
            },
            992: {
                items: 3,
                nav: true
            }
        }
        
    });
    
    // Trigger Slider Partner
    
    $('.partner-silder .owl-carousel').owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    
    // WoW 
    
    var wow = new WOW({
        mobile: false
    });
	wow.init();
  
});

