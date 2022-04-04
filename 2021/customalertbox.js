var showingerrmessage = false;

function checkifshowingmessagething(){

    if(showingerrmessage == true){

        $(".customalertboxcontainer").css("margin-top", "50px");

    }

    else{

        $(".customalertboxcontainer").css("margin-top", "-600px");

    }

}

checkifshowingmessagething();

function alert(messagethingy){

    showingerrmessage = true;
    checkifshowingmessagething();

    document.getElementById("problemdesc").innerHTML = messagethingy;

    setTimeout(function() { showingerrmessage = false; checkifshowingmessagething(); }, 5000);
  
}