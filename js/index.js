


var slideout = new Slideout({
    'panel': document.getElementById('main'),
    'menu': document.getElementById('menu'),
    'padding': 400,
    'tolerance': 70,
    'side': 'right'

});

document.querySelector('.js-slideout-toggle').addEventListener('click', function () {
    slideout.toggle();
});

var fixed = document.querySelector('.fixed-header');

slideout.on('translate', function (translated) {
    fixed.style.transform = 'translateX(' + translated + 'px)';
});

slideout.on('beforeopen', function () {
    fixed.style.transition = 'transform 300ms ease';
    fixed.style.transform = 'translateX(-400px)';
});

slideout.on('beforeclose', function () {
    fixed.style.transition = 'transform 300ms ease';
    fixed.style.transform = 'translateX(0px)';
});

slideout.on('open', function () {
    fixed.style.transition = '';
});

slideout.on('close', function () {
    fixed.style.transition = '';
});


// Find all menu links
var navLinks = document.querySelectorAll('.menulink');
// For each menu link
var index = 0,
    length = navLinks.length;
for (; index < length; index++) {
    // Attach click event, on click call close function
    navLinks[index].addEventListener('click',
        function () {
            slideout.close();
        }
    );
}







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



