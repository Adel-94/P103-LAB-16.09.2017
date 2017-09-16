var aswer = document.getElementById('answer');
var farToCelButton = document.getElementById('farToCelButton');
var celToFarButton = document.getElementById('celToFarButton');
var clear = document.getElementById('clear');


farToCelButton.onclick = function () {
    var fnumber = document.getElementById('farToCel').value;
    ftoc(fnumber);
}

function ftoc(input) {
    var num1 = (+input - 32) / 9 * 5;
    aswer.innerHTML = input + "\xB0F = " + num1 + "\xB0C";
}


celToFarButton.onclick = function () {
    var cnumber = document.getElementById('celToFar').value;
    ctof(cnumber);
}


function ctof(input2) {
    var num1 = (+input2 * 9 / 5 + 32);
    aswer.innerHTML = input2 + "\xB0C = " + num1 + "\xB0F";
}

clear.onclick = function () {
    aswer.innerHTML = "";
    document.getElementById('celToFar').value = "";
    document.getElementById('farToCel').value = "";
}