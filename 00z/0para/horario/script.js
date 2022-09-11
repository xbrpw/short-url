$(document).ready(function() {

  const date = new Date(),
    day = date.getDay(),
    hour = date.getHours(),
    minutes = date.getMinutes(),
    minFrom60 = 60 - minutes,
    openMT = (8 < hour && hour < 18) && (0 < day && day < 5) ? true : false,
    openFS = (8 < hour && hour < 20) && (day === 5 || day === 6) ? true : false,
    closedMT = (hour > 17 || hour < 9) && (0 < day && day < 5) ? true : false,
    closedFS = (hour > 19 || hour < 9) && (day === 5 || day === 6) ? true : false,
    open = $('<strong>Abierto</strong>').css('color', '#0FC1A1'),
    closed = $('<strong>Cerrado</strong>').css('color', '#5D414D');

  const openFor = (() => {
    let x = 0;
    if (openMT) {
      x = 17 - hour;
    } 
    if (openFS) {
      x = 19 - hour;
    }
    return x;
  })();

  const closedFor = (() => {
    var x = 0;
    if (closedMT || closedFS) {
      if (hour === 0) {
        x = 9;
      } else if (hour > 0 && hour < 17) {
        x = 8 - hour;
      } else if (hour > 17) {
        x = 33 - hour;
      }
    } else { //if Sunday
      if (hour === 0) {
        x = 33;
      } else if (hour > 0 && hour < 24) {
        x = 33 - hour;
      }
    }
    return x;
  })();

  if (openMT || openFS) {
    $("span").html(open);
    $("body").css("background", "#0FC1A1");
    if (openFor === 0) {
      $(".info").html("<h1>Estaremos dando servicio por " + minFrom60 + " minutos</h1>");
    } else if (openFor === 1) {
      $(".info").html("<h1>We're open for another 1 hour and " + minFrom60 + " minutos</h1>");
    } else {
      $(".info").html("<h1>We're open for another " + openFor + " hours and " + minFrom60 + " minutos</h1>");
    }
  } else {
    $("span").html(closed);
    $("body").css("background", "#5D414D");
    if (closedFor === 0) {
      $(".info").html("<h1>Estaremos cerrados por otras" + minFrom60 + " minutos</h1>");
    } else if (closedFor === 1) {
      $(".info").html("<h1>Estaremos cerrados por otra hora y " + minFrom60 + " minutos</h1>");
    } else {
      $(".info").html("<h1>Estaremos cerrados por otras" + closedFor + " horas y " + minFrom60 + " minutos</h1>");
    }
  }

});
