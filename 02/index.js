(function(){
  "use strict";

  var secHand  = document.getElementById('seconds');
  var minHand  = document.getElementById('minutes');
  var hourHand = document.getElementById('hours');

  var timeDisplay = document.getElementById('timeDisplay');

  var roughness = 0.2;

  functionInterval();

  var interval = setInterval(functionInterval, 1000*roughness);

  function functionInterval(){
    var time = new Date();
    setTimeTo(time);
  };
  function setTimeTo(time){
    timeDisplay.innerHTML = time;

    secHand.style.cssText  = "transform: rotateZ("+(0.006*(time.getSeconds()*1000+time.getMilliseconds()))+"deg)";
    minHand.style.cssText  = "transform: rotateZ("+(6*time.getMinutes())+"deg)";
//    console.log( 0.006*time.getMinutes() + 0.006*time.getSeconds()  + 0.0001*time.getMilliseconds() );
    hourHand.style.cssText = "transform: rotateZ("+(30*(time.getHours()%12))+"deg)";
  }

})();
