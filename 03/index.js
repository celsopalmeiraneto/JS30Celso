var aList = document.querySelectorAll("input[type=range]");
aList.forEach(function(oElement, nIndex){
  oElement.oninput = function(oEvent){
    document.documentElement.style.setProperty('--img-'+oElement.id, oEvent.target.valueAsNumber/4+'px');
  }
});

var oColorSelector = document.querySelector("input[type=color]");
oColorSelector.onchange = function(oEvent){
  document.documentElement.style.setProperty("--border-color", oEvent.target.value);
}
