import $ from 'jquery'
var currentValue = 10

$('#btnMuoviProgressBar').click(function(){
    console.log('Btn value:', currentValue)
    $('#cntValue').text(currentValue)
    $('#progressbar').val(currentValue);
    if (currentValue >= 100){
        currentValue = 0
    } else {
        currentValue = currentValue + 10
    }
});


