var pageblock = true;

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

var pageopendate = new Date();
var releasedate = new Date(2022, 03, 05);

var hoursleft = 23 - pageopendate.getHours();
var minsleft = 59 - pageopendate.getMinutes();
var secsleft = 59 - pageopendate.getSeconds();

var oneDay = 24 * 60 * 60 * 1000;
var daysleft = Math.floor(Math.abs((pageopendate - releasedate) / oneDay));

function return_zeroed(value, digitnmb){

    return ('000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000' + value).slice(-digitnmb)

}

function updatetext(){

    if(pageblock){
    
        document.getElementById("TIMETEXT").innerHTML = "Quedan: " + return_zeroed(daysleft, 2) + " días, " + return_zeroed(hoursleft, 2) + ":" + return_zeroed(minsleft, 2) + ":" + return_zeroed(secsleft, 2);
        var currentdate = new Date();
        var percuntilopen = ((Math.abs((currentdate - releasedate) / oneDay))/6)*100;
        $("#progresscontent").css("width", 100-percuntilopen + "%");
        document.getElementById("PROGRESSTEXT").innerHTML = "Proximamente, la nueva web de Trebutour... La espera va por el " + Math.round(100-percuntilopen) + "%.";

    }

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

}, 1000);