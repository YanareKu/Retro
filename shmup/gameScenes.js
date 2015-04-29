mainScene = {
	start: function( state ) {
	
	},
	
	update: function( state, deltaTime ) {
		if( INPUT.GetKeyDown('left') ) { state.user.ship.x -= state.user.ship.speed * deltaTime; }
	},
	
	draw: function( state ) {
		var _ctx = state.canvas.buffer.getContext('2d');
	
		// erase everything
		_ctx.fillStyle = "black";
		_ctx.fillRect( 0,0, state.screen.w,state.screen.h );
			
		// draw the user ship
		DrawShip( _ctx, state.user.ship );
	}
};

