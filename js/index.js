


var slideout = new Slideout({
  'panel': document.getElementById('main'),
  'menu': document.getElementById('menu'),
  'padding': 400,
  'tolerance': 70,
     'side':'right'

});

document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
  slideout.toggle();
});

var fixed = document.querySelector('.fixed-header');

slideout.on('translate', function(translated) {
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
var index = 0, length = navLinks.length;
for ( ; index < length; index++) {
    // Attach click event, on click call close function
    navLinks[index].addEventListener('click',
        function () {
            slideout.close();
        }
    );
}





