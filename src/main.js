import State from './State.js'
import Level from './Level.js'
import Snake from './Snake.js'
import Renderer from './Renderer.js'

const state = new State( new Level(), new Snake())
const renderer = new Renderer( document.getElementById("canvas"))

let predTime = 0
const update = ( t ) => {
	const dt = t - predTime
	predTime = t
	state.update( dt )
	renderer.render( state )
	window.requestAnimationFrame( update )
}

update( 0 )

window.addEventListener( 'keydown', (event) => {
	switch (event.keyCode) {
		case 37: state.snake.onKeyLeftPressed(); break;
		case 38: state.snake.onKeyUpPressed(); break;
		case 39: state.snake.onKeyRightPressed(); break;
		case 40: state.snake.onKeyDownPressed(); break;
	}
})
