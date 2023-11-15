$(document).ready(function(){
    let v=0, c=0, s=0, e=0;
    let total=25000;

    $("#amount_v_min").click(function(){
        if(v==0){
            v==0;
        }
        else{
            v-=1;
            total-=5000;
            $("#amount_total").text("Total Price: Rp " + total);
            $("#amount_v").text("Amount: "+v)
        }
    });

    $("#amount_v_plus").click(function(){
        v+=1;
        total+=5000;
        $("#amount_total").text("Total Price: Rp " + total);
        $("#amount_v").text("Amount: "+v)
    });

    $("#amount_e_min").click(function(){
        if(e==0){
            e==0;
        }
        else{
            e-=1;
            total-=5000;
            $("#amount_total").text("Total Price: Rp " + total);
            $("#amount_e").text("Amount: "+e)
        }
    });

    $("#amount_e_plus").click(function(){
        e+=1;
        total+=5000;
        $("#amount_total").text("Total Price: Rp " + total);
        $("#amount_e").text("Amount: "+e)
    });

    $("#amount_c_min").click(function(){
        if(c==0){
            c==0;
        }
        else{
            c-=1;
            total-=10000;
            $("#amount_total").text("Total Price: Rp " + total);
            $("#amount_c").text("Amount: "+c)
        }
    });

    $("#amount_c_plus").click(function(){
        c+=1;
        total+=10000;
        $("#amount_total").text("Total Price: Rp " + total);
        $("#amount_c").text("Amount: "+c)
    });

    $("#amount_s_min").click(function(){
        if(s==0){
            s==0;
        }
        else{
            s-=1;
            total-=2000;
            $("#amount_total").text("Total Price: Rp " + total);
            $("#amount_s").text("Amount: "+s)
        }
    });

    $("#amount_s_plus").click(function(){
        s+=1;
        total+=2000;
        $("#amount_total").text("Total Price: Rp " + total);
        $("#amount_s").text("Amount: "+s)
    });

    $(".reset").click(function(){
        total=25000;
        v=0; 
        c=0; 
        s=0; 
        e=0;
        $("#amount_total").text("Total Price: Rp " + total);
        $("#amount_v").text("Amount: "+v)
        $("#amount_e").text("Amount: "+e)
        $("#amount_c").text("Amount: "+c)
        $("#amount_s").text("Amount: "+s)
    });

    
    
});