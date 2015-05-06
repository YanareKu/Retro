var neededAssets = [
	'ship-1.png',
	'ship-2.png',
	'ship-3.png',
	'ship-4.png',
	'bullet.png',
];

function LoadGame( document ) {
	// create the stored gamestate, which we will carry around from now on
	var state = {
		canvas : {
			display : document.getElementById('displayCanvas'),
			buffer : document.getElementById('bufferCanvas'),
		},
		imagePath: 'http://www.teera.net/games/retro/art/',
		screen: { w: 320, h: 240, aspect: (320/240) },
		gameHolds : 0,
		
		user : {
			ship: CreateShip( 160, 220, 'ship-1.png', 64.0 ),
			bullets: [CreateBullet(20, 20, 'ship-3.png', 0, 0), CreateBullet(50, 50, 'ship-3.png', 0, 0)]
		},
	};
	
	return state;
}

function MainLoop( state, deltaTime ) {

	if( !!state.scene && state.gameHolds == 0 )
	{
		// update the active state
		state.scene.update( state, deltaTime );

		// draw the active state
		state.scene.draw( state );
		
		// blit to the display canvas
		DRAW.CanvasBlit( state.canvas.display, state.canvas.buffer, 2 );
	}
}
