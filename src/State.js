export default class State {
	constructor( level, snake ) {
		this.level = level
		this.snake = snake
	}

	_checkCollideSnakeApple() {
		const [x0,y0] = this.snake.head
		for ( let i = 0; i < this.level.apples.length; i++ ) {
			const [x,y] = this.level.apples[i]
			if ( x === x0 && y === y0 ) {
				this.snake.grow = true
				this.level.apples.splice( i, 1 )
				break
			}
		}
	}

	update( dt ) {
		this.level.update( dt )
		this.snake.update( dt )
		this._checkCollideSnakeApple()
	}
}
