const canvas = document.querySelector('canvas');
let context= canvas.getContext('2d');
context.beginPath();
context.moveTo(25,25);
context.lineTo(105,25);
context.stroke();