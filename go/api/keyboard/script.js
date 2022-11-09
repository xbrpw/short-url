/***** made by https://codepen.io/dennisgarrn *****/
/* ------------- funny little script! ------------- */ 
$('.button').click(function() {
  var text = $(this).text();
  $('input').val(text);
});
/* ------------- shift ------------- */ 
var ctx = document.getElementById('shift').getContext('2d');
ctx.beginPath();
ctx.moveTo(14, 0);
ctx.lineTo(28, 15);
ctx.lineTo(20, 15);
ctx.lineTo(20, 24);
ctx.lineTo(8, 24);
ctx.lineTo(8, 15);
ctx.lineTo(0, 15);
ctx.lineTo(14, 0);
ctx.strokeStyle = '#555';
ctx.stroke();
/* ------------- delete ------------- */ 
var ctx = document.getElementById('delete').getContext('2d');
ctx.beginPath();
ctx.moveTo(12, 0);
ctx.lineTo(34, 0);
ctx.lineTo(34, 22);
ctx.lineTo(12, 22);
ctx.lineTo(2, 11);
ctx.lineTo(12, 0);
ctx.moveTo(16, 15);
ctx.lineTo(25, 6);
ctx.moveTo(16, 6);
ctx.lineTo(25, 15);
ctx.strokeStyle = '#555';
ctx.stroke();
/* ------------- camera ------------- */ 
var ctx = document.getElementById('camera').getContext('2d');
ctx.beginPath();
ctx.arc(18,15,8,0,2*Math.PI);
ctx.lineWidth = 2;
ctx.strokeStyle = '#f4f4f4';
ctx.stroke();