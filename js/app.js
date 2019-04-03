console.log('Welcome to Tomagotchi Town')


class Pet {
	constructor(name){
		this.name = name;
		this.hunger = 0;
		this.sleepy = 0;
		this.bored = 0;
		this.age = 0

// function startGame() {
// 	myGamePiece = new component (30, 30, "http://archive.boston.com/ae/movies/blog/ignignokt.gif", 10, 120, "ignignokt");
	}
};

const toma = new Pet ('', 0, 0, 0, 0, 'sleep')



const game = {
  	time: 0,
  	intervalId: null,
  	start(){
  		toma.name= $('#input-box').val()
  		console.log('the game has started');

  		this.intervalId = setInterval(() => {
  			this.time += 1
  			console.log(this.time);
 			this.getOlder()
 			this.hungry()
 			this.boredom()
  		}, 250)
  	},

  	hungry(){
  		if(this.time % 3 === 0){
  			toma.hunger++
  			console.log("toma hunger level is " + toma.hunger)
  		}
  	},

  	boredom(){
  		if (this.time % 4 === 0) {
  			toma.bored += 1
  			console.log("toma boredom level is  " + toma.bored)
  		}
  	},

  	getOlder(){
  		if (this.time % 10 === 0) {
  			toma.age += 1
  			console.log("toma age is  " + toma.age)
  		}
  	}
	    


}



$('form').on('submit', (e) => {
    game.start();
    console.log('form has been submitted');
    e.preventDefault();
    const nickName = $('#input-box').val();
    console.log(nickName)

})

$('#feed').on('click', () => {
	console.log('feed was clicked');
})

// $('#feed').on('click', () => {
//     // game.hungry();
//     console.log("feed button was clicked")
// }

$('#play').on('click', () => {
    // game.bored();
    console.log("play button was clicked")

})

$('#lights').on('click', () => {
    // game.sleepy();
    console.log("lights button was clicked")

});


