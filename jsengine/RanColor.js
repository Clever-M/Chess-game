var death = document.querySelector('canvas');

death.width = window.innerWidth;
death.height = window.innerHeight;
var c = death.getContext('2d');
for(var i=0; i<10000; i++){

 var x = Math.random() * window.innerWidth
 var y = Math.random() * window.innerHeight
 var r = Math.floor(Math.random() * 256)
 var g = Math.floor(Math.random() * 256)
 var b = Math.floor(Math.random() * 256)
 var rgb = 'rgba('+r+ ', ' +g+ ', ' +b+ ', ' +0.9+ ')';

 c.beginPath()
 c.arc(x, y, 30, 0, Math.PI * 2, false);
 c.strokeStyle = rgb;
 c.stroke();
}
