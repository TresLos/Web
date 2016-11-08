window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		arrowX = width / 2,
		arrowY = height / 2,
		dx, dy,
		Rangle = 0, // Angle real.
		Aangle = Math.PI/4, // Aparent angle.
		acc = 0.007,
		a = 0;

	render();

	function render() {
		arrowX = width / 2 + Math.cos(a) * height * .8;
		arrowY = height / 2 + Math.sin(a) * height * .4;
		a += .001;
		context.clearRect(0, 0, width, height);

		context.save();
		context.translate(arrowX, arrowY);

		if ( Rangle * Aangle < 0 )
		{
			var tmp;
			if ( Rangle < 0 ) {
				tmp = Rangle + Math.PI;
			} else {
				tmp = Rangle - Math.PI;
			}
			if ( tmp - Aangle < 0 ) {
				Aangle += acc; // Esquerra.
			} else {
				Aangle -= acc; // Dreta.
			}
			//console.log ("Rebes." + Rangle + " " + Aangle);
		} else {
			if ( Rangle - Aangle < 0 ) {
				Aangle -= acc; // Esquerra.
			} else {
				Aangle += acc; // Dreta.
			}
		}
		if ( Aangle < -Math.PI ) {
			Aangle += 2* Math.PI;
		} else if ( Aangle > Math.PI ) {
			Aangle -= 2* Math.PI;
		}

		context.rotate(Aangle);

		context.beginPath();
		context.moveTo(20, 0);
		context.lineTo(-20, 0);
		context.moveTo(20, 0);
		context.lineTo(10, -10);
		context.moveTo(20, 0);
		context.lineTo(10, 10);
		context.stroke();

		context.restore();
		requestAnimationFrame(render);
	}

	document.body.addEventListener("mousemove", function(event) {
		dx = event.clientX - arrowX;
		dy = event.clientY - arrowY;
		Rangle = Math.atan2(dy, dx); //Math.atan(dy/dx);
	});


};
