window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;

	var centerY = height / 2,
		centerX = width / 2,
		baseAlpha = 0.5,
		offset = 0.5,
		speed = 0.005,
		angle = 0;

context.fillText ( "Lissajous curve", 0, 10);

	rendero();

	function render() {
		var alpha = baseAlpha + Math.sin(angle) * offset;

		context.fillStyle = "rgba(0, 0, 0, " + alpha + ")";

		context.clearRect(0, 0, width, height);
		context.beginPath();
		context.arc(centerX, centerY, 100, Math.PI/2, 3*Math.PI/2 , true);
		context.fill();
		context.stroke();		// Per acabar un dibuix.

		angle += speed;

		requestAnimationFrame(render);
	}

	function rendero() {
		var y = centerY + Math.sin (5*angle/3) * (centerY - 20);
		/*var y = centerY + Math.sin (3*angle/2) * (centerY - 20); Peixito*/
		var x = centerX + Math.cos (angle) * (centerX - 20);
		var r = 128 + Math.floor(128 * Math.sin (angle));
		var g = 128 + Math.floor(128 * Math.sin (2*angle));
		var b = 128 + Math.floor(128 * Math.sin (3*angle));
		context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
		/*context.clearRect (x-20, y-20, 40, 40);*/
		context.beginPath ();
		context.arc (x, y, 3, 0, 2*Math.PI, true);
		context.fill();
		angle += speed;

		requestAnimationFrame (rendero);
	}
};
