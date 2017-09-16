function set_background() {
    var f = document.querySelector('.first');
    var s = document.querySelector('.second');
    f.style.background = randomcolor();
    s.style.background = randomcolor();
}


function randomcolor() {
    var color='#';
    var letter='0123456789abcdef';
    for (var i = 0; i < 6; i++) {
       color += letter[Math.floor(Math.random()*16 +1)];
    }
  
    return color;
}
