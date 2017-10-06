import $ from 'jquery'
var pBar = document.getElementById('progressbar2');
var currentValue = 10;

var updateProgress = function(value) {
  pBar.value = value;
  pBar.getElementsByTagName('span')[0].innerHTML = Math.floor((100) * value);
}

$("#btnMuoviProgressBar").click(function(){
    console.log('button pressed', currentValue);
    pBar.value = currentValue;
    pBar.getElementsByTagName('span')[0].innerHTML = currentValue;
    if (currentValue >= 100){
        currentValue = 0;
    } else {
        currentValue = currentValue + 10;
    }
    
});


