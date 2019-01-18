
// randomized shapes

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

//randomized shapes end

