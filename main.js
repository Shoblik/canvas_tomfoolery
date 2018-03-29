(function() {
    var canv = document.getElementById('canvas'),
        c = canv.getContext('2d'),
        gravity = .1,
        dampening = .99;

    canv.width = document.body.clientWidth;
    canv.height = document.body.clientHeight;
    canvW = canv.width;
    canvH = canv.height;


    var circle = {
        x: document.body.clientWidth / 2,
        y: 10,
        //(vx, vy) = Velocity vector
        vx: 0,
        vy: 0,
        radius: 30,
    }

    function executeFrame() {
        console.log(circle.vy);
        circle.x += circle.vx;
        circle.y += circle.vy;

        //Increment Gravity
        circle.vy += gravity;

        // Slow it down
        // circle.vy *= dampening;
        // circle.vx *= dampening;

        // Slow it down
        if (Math.floor(circle.vy) === -1) {
            circle.vy = 0;
        } else if ((circle.vy) < -1) {
            console.log((circle.vy));
            circle.vy += gravity;
        }

        //Bounce
        if (circle.y + circle.radius > canv.height) {
            //check to see if the ball is at the bottom
            // circle.y = canv.height - circle;
            circle.vy = -Math.abs(circle.vy);
        }

        //gets rid of the old frame
        c.clearRect(0,0, canv.width, canv.height);

        //Creating the circle
        c.beginPath();
        c.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        c.fillStyle = '#FF3200';
        c.fill();
        c.closePath();

        requestAnimFrame(executeFrame);

        // if (circle.y < canv.height - circle.radius) {
        //     //if we want to keep the animation going tell call it again
        // } else {
        //     //if you want the animation to end or change
        //
        // }
    }


//Start animation
    executeFrame();


})();
