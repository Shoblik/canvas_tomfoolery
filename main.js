var canv = document.getElementById('canvas'),
    c = canv.getContext('2d');
canv.width = document.body.clientWidth;
canv.height = document.body.clientHeight;
canvW = canv.width;
canvH = canv.height;

var x = document.body.clientWidth / 2,
    y = document.body.clientHeight / 2,
    radius = 10,
    incrementor = .001;

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        executeFrame('up');

    }
    else if (e.keyCode == '40') {
        // down arrow
        console.log('downArrow');
        executeFrame('down');
    }
    else if (e.keyCode == '37') {
        // left arrow
        executeFrame('left');
    }
    else if (e.keyCode == '39') {
        // right arrow
        executeFrame('right');
    }

}
var speed = 2;

function executeFrame(direction, bool) {
    switch(direction) {
        case 'down':
            y += speed;
            break;
        case 'up':
            y -= speed;
            break;
        case 'left':
            x -= speed;
            break;
        case 'right':
            x += speed;
            break;
    }

//gets rid of the old frame
    c.clearRect(0,0, canv.width, canv.height);

//Creating the circle
    for (let i = 0; i < 1; i++) {
        c.beginPath();
        c.arc(x + (20 * i), y, radius, 0, 2 * Math.PI);
        c.fillStyle = '#FF3200';
        c.fill();
        c.closePath();
    }


    if (y < canv.height - radius) {
        //if we want to keep the animation going tell call it again
        // requestAnimFrame(executeDownFrame);
    } else {
        //if you want the animation to end or change
        console.log('end');
        // requestAnimFrame(executeUpFrame);

    }
}
function executeUpFrame() {
    y = y-- + (incrementor * -1);
    incrementor += .01;

//gets rid of the old frame
    c.clearRect(0,0, canv.width, canv.height);

    for (let i = 0; i < Math.floor(document.body.clientWidth / radius); i++) {
        c.beginPath();
        c.arc(x + (20 * i), y, radius, 0, 2 * Math.PI);
        c.fillStyle = '#FF3200';
        c.fill();
        c.closePath();
    }


    if (y > radius) {
        requestAnimFrame(executeUpFrame);
    } else {
        requestAnimFrame(executeDownFrame);
    }
}


//Start animation
executeFrame();

