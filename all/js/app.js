function myFunction_extr() {
   document.getElementById("extr").innerHTML = "Paragraph changed from external";
         }

var x,y,z;
x = 5;
y = 6;
z = x + y;         
document.getElementById("syntax").innerHTML = z;

document.getElementById("operators").innerHTML = (5 + 6) * 10;

var x, y;
x = 500;
y = 60;
document.getElementById("assign").innerHTML = x + y;


var x, y;
x = 8 + 6;
y = x * 10;
//x= 89;  I will not be executed
document.getElementById("result").innerHTML = y;




// ***** jQueary from here ***** //


$(document).ready(function(){
    $("#hide").click(function(){
        $(this).hide();
    });
});        //  POB //





$(document).ready(function(){
    $("#btn1").click(function(){
        $("#test").hide();
    });
});


$(document).ready(function(){
    $(".btn2").click(function(){
        $(".test1").hide();
    });
});


$(document).ready(function(){
    $("#hide_all").click(function(){
        $("*").hide();
    });
});




$(document).ready(function(){
    $("#button_hide").click(function(){
        $(this).hide();
    });
});


$(document).ready(function(){
    $("#with_btn").click(function(){
        $("h2.intro").hide();
    });
});



$(document).ready(function(){
    $("#btn_change").click(function(){
        $("p.change:first").hide();
    });
});          



$(document).ready(function(){
    $("#btn3").click(function(){
        $("ul li:first").hide();
    });
});




$(document).ready(function(){
    $("#first_child").click(function(){
        $("ul li:first-child").hide();
    });
});        // POB //

$(document).ready(function(){
    $("#href_close").click(function(){
        $("[href]").hide();
    });
});



$(document).ready(function(){
    $("#target_close").click(function(){
        $("a[target='_blank']").hide();
    });
});



$(document).ready(function(){
    $(".hiding_btn").click(function(){
        $(":button").hide();
    });
});


$(document).ready(function(){
    $("tr:even").css("background-color", "yellow");
});



