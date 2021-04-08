var showinghm = false;

if(showinghm){
    $("#hambmencontainer").css("display", "inline");
}

else{
    $("#hambmencontainer").css("display", "none");
}

function activatehm(){
    showinghm = true;
    console.log("opened");
    
    if(showinghm){
        $("#hambmencontainer").css("display", "inline");
    }
    
    else{
        $("#hambmencontainer").css("display", "none");
    }
}

function hidehm(){
    showinghm = false;
    console.log("closed");

    if(showinghm){
        $("#hambmencontainer").css("display", "inline");
    }
    
    else{
        $("#hambmencontainer").css("display", "none");
    }
}
