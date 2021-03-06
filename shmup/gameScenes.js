mainScene = {
	start: function( state ) {
	
	},
	
	update: function( state, deltaTime ) {
		var imageAsset = ASSETS.GetAsset( state.user.ship.image );

		if( INPUT.GetKeyDown('left') ) { state.user.ship.x -= state.user.ship.speed * deltaTime; }
		if( INPUT.GetKeyDown('right') ) { state.user.ship.x += state.user.ship.speed * deltaTime; }
		if( INPUT.GetKeyDown('down') ) { state.user.ship.y += state.user.ship.speed * deltaTime; }
		if( INPUT.GetKeyDown('up') ) { state.user.ship.y -= state.user.ship.speed * deltaTime; }

		if( INPUT.GetKeyDown('shift') ) {
			state.user.bullets.push(CreateShip(state.user.ship.x, state.user.ship.y, 'bullet.png', 200, 200));
			// for ( n=0; n<(state.user.bullets.length); n++ ) {
				// && Date.now() - state.lastFire > 100
			}

			state.lastFire = Date.now();
		// }

		BindObject( state );



	},
	
	
	draw: function( state ) {
		var _ctx = state.canvas.buffer.getContext('2d');
	
		// erase everything
		_ctx.fillStyle = "black";
		_ctx.fillRect( 0,0, state.screen.w,state.screen.h );

		// draw the bullets
		for ( n=0; n<(state.user.bullets.length); n++ ) {
			DrawObject( _ctx, state.user.bullets[n] );
		}
			
		// draw the user ship
		DrawObject( _ctx, state.user.ship );


	}
};

