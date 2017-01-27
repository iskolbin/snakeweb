export default class Renderer {
	constructor( canvas, cellsize = 10 ) {
		this.canvas = canvas
		this.context = canvas.getContext('2d')
		this.cellsize = cellsize
	}

	render( state ) {
		const cs = this.cellsize
		const ctx = this.context
		ctx.clearRect( 0, 0, canvas.width, canvas.height )
		ctx.fillStyle = 'red'
		ctx.fillRect( cs*state.snake.head[0], cs*state.snake.head[1], cs, cs )
		state.snake.tail.forEach( ([x,y]) => ctx.fillRect( x*cs, y*cs, cs, cs ))
		ctx.fillStyle = 'green'
		state.level.apples.forEach( ([x,y]) => ctx.fillRect( x*cs, y*cs, cs, cs )) 
	}
}
