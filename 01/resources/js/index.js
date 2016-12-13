var musicKeyboard = (function(){
  "use strict";
  var instance;


  function renderKeyboard(){
    var keys = [
      {key : "A", sound : "boom"},
      {key : "S", sound : "clap"},
      {key : "D", sound : "hihat"},
      {key : "F", sound : "kick"},
      {key : "G", sound : "openhat"},
      {key : "H", sound : "ride"},
      {key : "J", sound : "snare"},
      {key : "K", sound : "tink"},
      {key : "L", sound : "tom"},
    ];

    var keyboard = document.getElementById('keyboard');
    keyboard.innerHTML = "";

    keys.forEach(function(elem){
      keyboard.innerHTML += "<div class=\"flex-item key\" data-sound=\"{{sound}}\" data-key=\"{{key}}\"><div class=\"letter\">{{key}}</div><div class=\"desc\">{{sound}}</div></div>".replace(new RegExp("{{key}}", 'g'),elem.key).replace(new RegExp("{{sound}}", 'g'),elem.sound);
    });

    var audioContainer = document.getElementById('audio');
    keys.forEach(function(elem){
      audioContainer.innerHTML += "<audio src=\"resources/media/{{sound}}.wav\" id=\"{{sound}}\">".replace(new RegExp("{{sound}}", "g"), elem.sound);
    });
  }


  function playSound(key){
    var sound = document.getElementById(key.dataset.sound);
    sound.currentTime = 0;
    sound.play();
    performAnimation(key);
  }

  function performAnimation(key){
    key.classList.add('pressed');


    // ('transitionend', function(e){
    //   console.log(e);
    // });

    setTimeout(function(){
      key.classList.remove('pressed');
    },100);
  }

  function findKey(leafElement){
    while (leafElement) {
      if (leafElement.classList.contains('key')){
        return leafElement;
      }else{
        leafElement = leafElement.parentElement;
      }
    }
    return null;
  }


  function createInstance(){
    //rendering keyboard
    renderKeyboard();

    //Registering click events...
    var keys = document.getElementsByClassName('key');
    for (var i = 0; i < keys.length; i++) {
      var it = keys.item(i);
      it.addEventListener("click", function(evt){
        var el = findKey(evt.target);
        playSound(el);
      });
      it.addEventListener("transitionend",function(e){
        console.log(e);
      });
    }

    //Registering keyboard actions...
    document.addEventListener("keydown", function(evt){
      var letter = evt.key.toUpperCase();
      if ("ASDFGHJKL".search(letter)>=0){
        var letters = document.getElementsByClassName('letter');
        for (var i = 0; i < letters.length; i++) {
          var key = findKey(letters.item(i));
          if (key.dataset.key.toUpperCase() == letter ){
            playSound(key);
          }
        }

      }
    });

    return {
    };
  }

  return {
    init : function(){
      if (!instance)
        createInstance();
      return instance;
    }
  }
})();

window.addEventListener("load", function(evt){
  musicKeyboard.init();
});


//var keys document.getElementsByClassName('keys');
