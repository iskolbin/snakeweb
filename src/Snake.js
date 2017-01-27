import * as Direction from './Direction.js'

export default class Snake {
	constructor() {
		this.head = [0,0]
		this.tail = []
		this.direction = Direction.Right
		this.moveDelay = 400
		this.moveCooldown = 0
		this.grow = false
	}

	_doMove() {
		const [x,y] = this.head
		const [dx,dy] = this.direction
		if ( this.grow ) {
			this.grow = false
		} else {
			this.tail.pop()
		}
		this.tail.unshift( this.head )
		this.head = [x+dx,y+dy]
	}

	update( dt ) {
		this.moveCooldown += dt
		while ( this.moveCooldown >= this.moveDelay ) {
			this.moveCooldown -= this.moveDelay
			this._doMove()
		}
	}

	isPossibleDirection( direction ) {
		const [x,y] = this.head
		const [x1,y1] = this.tail[0]
		const [dx,dy] = direction
		return x + dx !== x1 || y + dy !== y1;
	}

	_changeDirection( direction ) {
		if ( this.isPossibleDirection( direction )) {	
			this.direction = direction
			return true
		} else {
			return false
		}
	}

	onKeyUpPressed() {
		this._changeDirection( Direction.Up )
	}

	onKeyDownPressed() {
		this._changeDirection( Direction.Down )
	}

	onKeyLeftPressed() {
		this._changeDirection( Direction.Left )
	}

	onKeyRightPressed() {
		this._changeDirection( Direction.Right )
	}
}
