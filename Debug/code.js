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
	TLcontext.clearRect(-TLwidth, -TLheight, TLwidth, TLheight);
	TLcontext.rotate (TLarrowAngle);

	TLcontext.beginPath ();
	TLcontext.moveTo (10, -10);
	TLcontext.lineTo (20, 0);
	TLcontext.lineTo (10, 10);
	TLcontext.moveTo (20, 0);
	TLcontext.lineTo (-20, 0);
	TLcontext.stroke ();

	TLcontext.restore ();


requestAnimationFrame(drawArrow);
}
window.onload = function() {
/* Inicialitzem les variables. */
	TLcanvas = document.getElementById ("canvas");
	TLcontext = canvas.getContext ("2d");

	TLwidth = canvas.width = window.innerWidth;
	TLheight =canvas.height= window.innerHeight;

	TLarrowwidth = TLwidth/2;
        TLarrowheight= TLheight/2;


	TLarrowAngle = Math.PI/9;

	TLcontext.translate ( TLarrowwidth, TLarrowheight);
	drawArrow ();

TLcanvas.addEventListener('click', function(event) {
//	event.clientX;
//	event.clientY;

TLarrowAngle += 0.1;
	drawArrow();
});
}

