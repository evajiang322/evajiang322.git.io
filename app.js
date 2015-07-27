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

function showLife(){
  $(".life").slideDown(2000);
}

function hideLife(){
  $(".life").slideUp(2000);
}

// ----------CODE THAT DOES STUFF------------------------

$(document).ready(function (){
    $("#content").fadeIn(4000);
});

$("#interests").click(function (){
  if ($("#food").css("display") === "block"){
    hideInterests();
  }
  else if ($("#google").css("display") === "none" && $("#graduation").css("display") === "none"){
    showInterests();
  }
  else if ($("#google").css("display") === "block"){
    hideSocial();
    showInterests();
  }
  else{
    hideLife();
    showInterests();
  }
});

$("#social").click(function (){
  if ($("#google").css("display") === "block"){
    hideSocial();
  }
  else if ($("#food").css("display") === "none" && $("#graduation").css("display") === "none"){
    showSocial();
  }
  else if ($("#food").css("display") === "block"){
    hideInterests();
    showSocial();
  }
  else{
    hideLife();
    showSocial();
  }
});

$("#personal").click(function(){
  if ($("#graduation").css("display") === "block"){
    hideLife();
  }
  else if ($("#food").css("display") === "none" && $("#google").css("display") === "none"){
    showLife();
  }
  else if ($("#food").css("display") === "block"){
    hideInterests();
    showLife();
  }
  else{
    hideSocial();
    showLife();
  }
});

// Life headers Hover

$("#graduation").hover(function(){
  if ($("#graduation_header").css("opacity") === "1"){
    $("#graduation_header").css("opacity", 0);
  }
  else{
    $("#graduation_header").fadeTo("fast", 1);
  }
});

$("#camping").hover(function(){
  if ($("#camping_header").css("opacity") === "1"){
    $("#camping_header").css("opacity", 0);
  }
  else{
    $("#camping_header").fadeTo("fast", 1);
  }
});

$("#prom").hover(function(){
  if ($("#prom_header").css("opacity") === "1"){
    $("#prom_header").css("opacity", 0);
  }
  else{
    $("#prom_header").fadeTo("fast", 1);
  }
});

$("#fon").hover(function(){
  if ($("#fon_header").css("opacity") === "1"){
    $("#fon_header").css("opacity", 0);
  }
  else{
    $("#fon_header").fadeTo("fast", 1);
  }
});

$("#wcarnival").hover(function(){
  if ($("#wcarnival_header").css("opacity") === "1"){
    $("#wcarnival_header").css("opacity", 0);
  }
  else{
    $("#wcarnival_header").fadeTo("fast", 1);
  }
});

$("#halloween").hover(function(){
  if ($("#halloween_header").css("opacity") === "1"){
    $("#halloween_header").css("opacity", 0);
  }
  else{
    $("#halloween_header").fadeTo("fast", 1);
  }
});
