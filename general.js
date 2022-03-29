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
var secsleft = 60 - pageopendate.getSeconds();

var oneDay = 24 * 60 * 60 * 1000;
var daysleft = Math.floor(Math.abs((pageopendate - releasedate) / oneDay));

function return_zeroed(value, digitnmb){

    return ('000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000' + value).slice(-digitnmb)

}

function updatetext(){

    if(pageblock){
    
        document.getElementById("TIMETEXT").innerHTML = return_zeroed(daysleft, 2) + "d " + return_zeroed(hoursleft, 2) + ":" + return_zeroed(minsleft, 2) + ":" + return_zeroed(secsleft, 2);

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