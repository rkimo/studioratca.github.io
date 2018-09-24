$(document).ready(function () {
    var tl = new TimelineMax({
        repeat: 0
    });

    for (var i = 0; i < 1; i++) {
        var amin = tl.to(".shapes", 0.4, {

            //		backgroundColor: sample(colors),
            x: random(-300, 400),
            y: random(-300, 300),
            //			alpha: random(1),
            repeat: 0,
            repeatDelay: 0,
            yoyo: true,
            ease: Power2.easeOut,

        });
    }

    Draggable.create(".shapes", {
       //  bounds: ".sideblock",

    });


    function sample(list) {
        return function () {
            return list[Math.floor(Math.random() * list.length)];
        };
    }

    function random(min, max) {
        if (max == null) {
            max = min;
            min = 0;
        }
        return function () {
            return Math.random() * (max - min) + min;
        };
    }
});





/*//////////// contactpagescripts //////////// */
var cvs = document.getElementById("canvas");
cvs.width = window.innerWidth;
cvs.height = window.innerHeight;
var ctx = canvas.getContext("2d");
radius = 100;

//prepare canvas
ctx.fillStyle = "#ffffff";
ctx.fillRect(0,0, cvs.width,cvs.height);

//prepare a 100% opacity eraser
ctx.globalCompositeOperation = "destination-out";
ctx.lineWidth = 15;

// make random strokes around cursor while mouse moves
canvas.onmousemove = function(e) {
  var rect = this.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;

 ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arc(x, y, radius, 0, 2*Math.PI);
    ctx.fill();
};
/*//////////// contactpagescripts end //////////// */


