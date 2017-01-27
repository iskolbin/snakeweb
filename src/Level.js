const getRandomInt = (min, max) => {
	min = Math.ceil( min )
	max = Math.floor( max )
	return Math.floor(Math.random() * (max - min)) + min
}

export default class Level {
	constructor() {
		this.walls = []
		this.apples = []
		this.appleSpawnDelay = 2000
		this.appleSpawnCooldown = 0
		this._spawnApple()
	}

	_spawnApple() {
		this.apples.push( [getRandomInt(0,20), getRandomInt(0,20)] )
	}

	update( dt ) {
		this.appleSpawnCooldown += dt
		while ( this.appleSpawnCooldown >= this.appleSpawnDelay ) {
			this._spawnApple()
			this.appleSpawnCooldown -= this.appleSpawnDelay
		}
	}
}
