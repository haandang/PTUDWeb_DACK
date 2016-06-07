/**
 * Created by dvqha_000 on 6/5/2016.
 */
$(function() {
    $(".jqzoom").jqzoom();
});

$(document).ready(function(){
    $(".menu_body").hide();
    //toggle the componenet with class menu_body
    $(".menu_head").click(function(){
        $(this).next(".menu_body").slideToggle(600);
        var plusmin;
        plusmin = $(this).children(".plusminus").text();

        if( plusmin == '+')
            $(this).children(".plusminus").text('-');
        else
            $(this).children(".plusminus").text('+');
    });
});

