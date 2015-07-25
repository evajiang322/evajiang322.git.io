function showInterests(){
  $("#food").slideDown(2000);
  $("#fencing").slideDown(2000);
  $("#art").slideDown(2000);
}

function hideInterests(){
  $("#art").slideUp(2000);
  $("#fencing").slideUp(2000);
  $("#food").slideUp(2000);
}

function showSocial(){
  $("#google").slideDown(2000);
  $("#github").slideDown(2000);
  $("#linkedin").slideDown(2000);
}

function hideSocial(){
  $("#linkedin").slideUp(2000);
  $("#github").slideUp(2000);
  $("#google").slideUp(2000);
}

// ----------CODE THAT DOES STUFF------------------------

$(document).ready(function (){
    $("#content").fadeIn(4000);
});

$("#interests").click(function (){
  if ($("#food").css("display") === "none"){
    if ($("#google").css("display") === "none"){
      showInterests();
    }
    else{
      hideSocial();
      showInterests();
    }
  }
  else{
    hideInterests();
  }
});

$("#social").click(function (){
  if ($("#google").css("display") === "none"){
    if ($("#food").css("display") === "none"){
      showSocial();
    }
    else{
      hideInterests();
      showSocial();
    }
  }
  else{
    hideSocial();
  }
});
