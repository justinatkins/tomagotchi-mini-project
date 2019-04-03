console.log('Welcome to Tomagotchi Town')


class pet {
	constructor(name, hungry, sleepy, boredom, age){
		this.name = name;
		this.hungry = 0;
		this.sleepy = 0;
		this.boredom = 0;
		this.age = 0

// function startGame() {
// 	myGamePiece = new component (30, 30, "http://archive.boston.com/ae/movies/blog/ignignokt.gif", 10, 120, "ignignokt");

}

const game = {
  	time: 0,
  	start(){
  		$('#body').append(`<img id="pet" src="http://archive.boston.com/ae/movies/blog/ignignokt.gif">`)
		const gameTimer = setInterval(() => {
			if(this.time === 60){
        	console.log('Your pet has died....');
	       	clearInterval(gameTimer);
        	}

        	this.time += 1;

        	console.log(this.time);
    	}, 1000);
    }
}

game.start();

$('form').on('go', (e) => {
    game.startGame();
    event.preventDefault();
    
}

$('#hungry').on('click', () => {
    game.hungry();

})

$('#bored').on('click', () => {
    game.bored();

})

$('#sleepy').on('click', () => {
    game.sleepy();

});


