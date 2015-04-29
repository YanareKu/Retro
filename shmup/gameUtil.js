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

// specialized draw function that will draw the ship's image centered around its X,Y on a specified canvas context
function DrawShip( ctx, ship ) {

	var imageAsset = ASSETS.GetAsset( ship.image );

	// store the width and height of the image file
	var w = imageAsset.width;
	var h = imageAsset.height;
	
	// find where the top left corner of the ship graphic will be relative to the ship's true position
	var x = parseInt(ship.x - w/2);
	var y = parseInt(ship.y - h/2);
	
	// draw the centered ship
	ctx.drawImage(imageAsset, x,y, w,h )
}