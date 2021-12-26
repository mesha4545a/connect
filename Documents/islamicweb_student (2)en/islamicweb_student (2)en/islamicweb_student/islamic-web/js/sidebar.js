$(function() {
    'use strict';
    $(".login li").click(function() {

        $(this).children().toggleClass('open');
        $(this).siblings().children().removeClass('open');
        console.log("sssssss");

    });


});

