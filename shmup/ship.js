// returns a new ship class from explicit values
//  - this basically is so we don't have to worry about typos entering the dictionary by hand all over the place
function CreateShip( x, y, image, speed ) {
	return {
		x: x,
		y: y,
		image: image,
		speed: speed,
	};
}