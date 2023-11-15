$(document).ready(function(){
    $("#stop").hide();
    $("#when").hide();

    $("#sup0").click(function(){
        $(".dropbtn").text("Normal");
        $("#text1").text(' ');
        $("#text2").text(' ');
        $("#text3").text(' ');
        $("#stop").hide();
        $("#when").hide();
    });
    
    $("#sup1").click(function(){
        $(".dropbtn").text("Surprise 1");
        $("#text1").html(
            "<p>Hi, I'm a tiger</p> <img src='animal1.jpg'>"
        );
        $('img').hover(function(){
            $("#text1").html(
                "<p>Now I'm a giraffe</p> <img src='animal2.jpg'>"
            );
        });
        $("#stop").hide();
        $("#when").hide();
        $("#text2").text(' ');
        $("#text3").text(' ');
    });

    $("#sup2").click(function(){
        $(".dropbtn").text("Surprise 2");
        $("#text2").html(
            '<div id="text2" class="w3-container w3-dark-gray w3-center"><p>Hi, it is Ellis here. </p><p>Eh wait, why this panel is sliding up. <br>Please help me with the stop button <br><br></p></div>'
        );
        $("#stop").show();
        $("#text2").slideUp(6000);
    
        $("#stop").click(function(){
            $("#text2").stop();
            $("#stop").hide();
            $("#text2").html(
                '<div id="text2" class="w3-container w3-dark-gray w3-center"><p>Ah, thank you for stopping it. </p></div>'
            );
        });
        $("#when").hide();
        $("#text1").text(' ');
        $("#text3").text(' ');
    });

    $("#sup3").click(function(){
        $("#stop").hide();
        $(".dropbtn").text("Surprise 3");
        $("#text3").html(
            '<p class="w3-center w3-large">Please wait a second for the article.</p> <div class="w3-center"><i class="fa fa-circle-o-notch fa-spin" style="font-size:80px"></i></div>'
        );
        $("#when").fadeIn(9000);
        $("#when").click(function(){
            $("#when").hide();
            $("#text3").html(
                'Sorry, this is the <div style="text-decoration:underline; cursor:pointer;">link</div> to the article'
            );
            
            $("#text3").click(function(){
                $("#text3").html(
                    'Sorry again, this is the correct <a href="https://the-artifice.com/the-element-of-surprise/">link</a>'
                );
            });

            
        });
        $("#text1").text(' ');
        $("#text2").text(' ');
    });

});
