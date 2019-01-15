var cvs = document.getElementById("canvas");
cvs.width = window.innerWidth;
cvs.height = window.innerHeight;
var ctx = canvas.getContext("2d");
radius = 140;


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
