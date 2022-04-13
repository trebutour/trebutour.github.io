/*var testmode = false;
var testvalue = false;
var pageblock;

var pageopendate = new Date();
var releasedate = new Date(2022, 03, 06);

var hoursleft = 23 - pageopendate.getHours();
var minsleft = 59 - pageopendate.getMinutes();
var secsleft = 59 - pageopendate.getSeconds();

var oneDay = 24 * 60 * 60 * 1000;
var daysleftpure = -((pageopendate - releasedate) / oneDay);
var daysleft = Math.floor(daysleftpure);

if(!testmode){

    if (daysleft < 0){

        pageblock = false;

    }

    else{

        pageblock = true;

    }

}

else{

    pageblock = testvalue;

}

if(pageblock){

    if (document.title != "TREBUTOUR"){

        window.location.href = "/";
    
    }

    document.querySelector(".PAGECONTENT").remove();
    
}

else{

    document.querySelector(".CONTADOR").remove();

}

//COUNTER

function return_zeroed(value, digitnmb){

    return ('000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000' + value).slice(-digitnmb)

}

function updatetext(){

    if(pageblock && daysleft >= 0){
    
        document.getElementById("TIMETEXT").innerHTML = "Quedan: " + return_zeroed(daysleft, 2) + " días, " + return_zeroed(hoursleft, 2) + ":" + return_zeroed(minsleft, 2) + ":" + return_zeroed(secsleft, 2) + " para la <span style='font-size: 7.5vmin;'>NUEVA WEB</span>.";
        var currentdate = new Date();
        var percuntilopen = ((-((currentdate - releasedate) / oneDay))/6)*100;
        $("#progresscontent").css("width", 100-percuntilopen + "%");
        document.getElementById("PROGRESSTEXT").innerHTML = "Próximamente, la nueva web de Trebutour... La espera va por el " + Math.floor(100-percuntilopen) + "%.";
        

    }

    else if(pageblock && daysleft < 0){

        document.getElementById("TIMETEXT").innerHTML = "REINICIA/REABRE LA PÁGINA";
        $("#TIMETEXT").css("transform", "translateX(-50%) translateY(-50%)");
        $("#progressbar").css("display", "none");

    }

    console.log(daysleft);

}

updatetext();

setInterval(function () {

    if(pageblock){

        secsleft -= 1;

        if(secsleft < 0){

            secsleft = 59;

            minsleft -= 1;

        }

        if(minsleft < 0){

            minsleft = 59;

            hoursleft -= 1;

        }

        if(hoursleft < 0){

            hoursleft = 23;

            daysleft -= 1;

        }

        updatetext();

    }

}, 1000);*/