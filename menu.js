$(document).ready(function(){
    $(".description1").hide();
    $(".description2").hide();
    $(".description3").hide();
    $(".description4").hide();
    $(".description5").hide();

    $(".dish1").hover(function(){
        $('.description1').fadeToggle();
        $(".dish1").toggleClass('hover1');
    });

    $(".dish2").hover(function(){
        $('.description2').fadeToggle();
        $(".dish2").toggleClass('hover1');
    });

    $(".dish3").hover(function(){
        $('.description3').fadeToggle();
        $(".dish3").toggleClass('hover1');
    });

    $(".dish4").hover(function(){
        $('.description4').fadeToggle();
        $(".dish4").toggleClass('hover1');
    });

    $(".dish5").hover(function(){
        $('.description5').fadeToggle();
        $(".dish5").toggleClass('hover1');
    });

    
    
});