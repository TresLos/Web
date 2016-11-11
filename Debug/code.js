/*
 * Declarant les variables globals.
 */
var	TLcontext,
	TLcanvas,
	TLarrowAngle,
	TLpointAngle,
	TLarrowwidth,
	TLarrowheight;

function drawArrow () {
/* Anem al lloc */
	TLcontext.translate ( TLarrowwidth, TLarrowheight);
	TLcontext.rotate (TLarrowAngle);

	TLcontext.beginPath ();
	TLcontext.moveTo (10, -10);
	TLcontext.lineTo (20, 0);
	TLcontext.lineTo (10, 10);
	TLcontext.moveTo (20, 0);
	TLcontext.lineTo (-20, 0);
	TLcontext.stroke ();

	TLcontext.restore ();
console.log ("canvi");

}
window.onload = function() {
/* Inicialitzem les variables. */
	TLcanvas = document.getElementById ("canvas");
	TLcontext = canvas.getContext ("2d");

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	TLarrowwidth = canvas.width/2;
        TLarrowheight =canvas.height/2;


	TLarrowAngle = Math.PI/9;

	drawArrow ();

TLcanvas.addEventListener('click', function(event) {
//	event.clientX;
//	event.clientY;

TLarrowAngle += 0.1;
	drawArrow();
});
}

