// specialized draw function that will draw the ship's image centered around its X,Y on a specified canvas context
function DrawObject( ctx, obj ) {

	var imageAsset = ASSETS.GetAsset( obj.image );

	// store the width and height of the image file
	var w = imageAsset.width;
	var h = imageAsset.height;
	
	// find where the top left corner of the obj graphic will be relative to the obj's true position
	var x = parseInt(obj.x - w/2);
	var y = parseInt(obj.y - h/2);
	
	// draw the centered obj
	ctx.drawImage(imageAsset, x,y, w,h );
}

//Creates player boundaries so that the ship cannot go past the edges of the screen.
function BindObject( state ) {
	var imageAsset = ASSETS.GetAsset( state.user.ship.image );

	state.user.ship.x = Math.max ( state.user.ship.x, imageAsset.width/2 );
	state.user.ship.y = Math.max ( state.user.ship.y, imageAsset.height/2 );
	state.user.ship.x = Math.min ( state.user.ship.x, (state.screen.w - imageAsset.width/2) );
	state.user.ship.y = Math.min ( state.user.ship.y, (state.screen.h - imageAsset.height/2) );

}