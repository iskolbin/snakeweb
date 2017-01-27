class Direction extends Array {
	constructor( dx, dy ) {
		super( dx, dy )
	}
}

export const Up    = new Direction( 0,-1 )
export const Down  = new Direction( 0, 1 )
export const Left  = new Direction(-1, 0 )
export const Right = new Direction( 1, 0 )
export const UpLeft    = new Direction(-1,-1)
export const DownLeft  = new Direction(-1, 1)
export const UpRight   = new Direction( 1,-1)
export const DownRight = new Direction( 1, 1)
