var ship = document.querySelectorAll('.glyphicon-play-circle');

ship.forEach(function (el) {

  el.addEventListener('click', function () {
    var e = el.parentNode.nextSibling;
    var audio_el = e.nextSibling;

    if(el.className == "glyphicon glyphicon-play-circle") {
     el.className="glyphicon glyphicon-pause";
     audio_el["play"]();
   }
   else if (el.className == "glyphicon glyphicon-pause"){
     el.className="glyphicon glyphicon-play-circle";
     audio_el["pause"]();
     audio_el["load"]();
   }

 });
});