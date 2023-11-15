$(document).ready(function(){
    $(".answer1").hide();
    $(".answer2").hide();
    $(".answer3").hide();

    $(".question1").hover(function(){
        $(".question1").toggleClass('hover1');
        $(".q1").toggleClass('hoveri');
    });

    $(".question2").hover(function(){
        $(".question2").toggleClass('hover1');
        $(".q2").toggleClass('hoveri');
    });

    $(".question3").hover(function(){
        $(".question3").toggleClass('hover1');
        $(".q3").toggleClass('hoveri');
    });

    $(".question1").click(function(){
        $(".answer1").toggle();
        $(".answer2").hide();
        $(".answer3").hide();
    });

    $(".question2").click(function(){
        $(".answer2").toggle();
        $(".answer1").hide();
        $(".answer3").hide();
    });

    $(".question3").click(function(){
        $(".answer3").toggle();
        $(".answer2").hide();
        $(".answer1").hide();
    });

    
});