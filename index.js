$(document).ready(function(){
    let bg_animal='white';
    let bg_nature ='white';
    let bg_travel='white';

    $(".all").click(function(){
        $('img').show();
        $('button').css('background-color','white');
        bg_animal='white';
        bg_nature='white';
        bg_travel='white';
    });

    $(".animal").click(function(){
        $('button.travel').css('background-color','white');
        $('button.nature').css('background-color','white');
        bg_nature='white';
        bg_travel='white';
        if(bg_animal=='white'){
            $('img.animal').show();
            $("img.nature").hide();
            $("img.travel").hide();
            $('button.animal').css('background-color','lightskyblue');
            bg_animal='lightskyblue';
        }
        else{
            $('button.animal').css('background-color','white');
            bg_animal='white';
            $('img').show();
        }
    });
    
    $(".travel").click(function(){
        $('button.animal').css('background-color','white');
        $('button.nature').css('background-color','white');
        bg_animal='white';
        bg_nature='white';
        if(bg_travel=='white'){
            $('img.travel').show();
            $("img.nature").hide();
            $("img.animal").hide();
            $('button.travel').css('background-color','lightskyblue');
            bg_travel='lightskyblue';
        }
        else{
            $('button.travel').css('background-color','white');
            bg_travel='white';
            $('img').show();
        }
    });

    
    $(".nature").click(function(){
        $('button.travel').css('background-color','white');
        $('button.animal').css('background-color','white');
        bg_animal='white';
        bg_travel='white';
        if(bg_nature=='white'){
            $('img.nature').show();
            $("img.animal").hide();
            $("img.travel").hide();
            $('button.nature').css('background-color','lightskyblue');
            bg_nature='lightskyblue';
        }
        else{
            $('button.nature').css('background-color','white');
            bg_nature='white';
            $('img').show();
        }
    });
});