// QUERY SELECTORS:
var entireGameBoard = document.querySelector('.grid-container')
// console.log(entireGameBoard.children)
var squares = document.querySelectorAll('.square')
var square1 = document.querySelector('#square1-container')
var square2 = document.querySelector('#square2-container')
var square3 = document.querySelector('#square3-container')
var square4 = document.querySelector('#square4-container')
var square5 = document.querySelector('#square5-container')
var square6 = document.querySelector('#square6-container')
var square7 = document.querySelector('#square7-container')
var square8 = document.querySelector('#square8-container')
var square9 = document.querySelector('#square9-container')



// EVENT LISTENERS:

entireGameBoard.addEventListener('click', function (event) {
	console.log(event.target)
	if (event.target.classList.contains('square')) {
		// invoke function here
		changePlayerTurn(event)
		console.log('hello')
	}
	// separate function to change the token based on conditional
});

function changePlayerTurn(event) {
	if (event.target.innerHTML = '') {
		if (player1.currentPlayer === true){
			event.target.innerHTML = '🐢'
			player1.currentPlayer = false
			renderGameBoard()
		}  
	}

} 


// GLOBAL VARIABLES:

// var currentToken;

var gameBoard = ['','',2,3,4,5,6,7,8]

var player1 = {
	id: 'one',
	token: 'tortoise',
	wins: 0,
	currentPlayer: true
}

var player2 = {
	id: 'two',
	token: 'hare',
	wins: 0,
	currentPlayer: false
}



// FUNCTIONS:

function renderGameBoard() {
	for (var i = 0; i < entireGameBoard.children.length; i++) {
		entireGameBoard.children[i].innerHTML = gameBoard[i]
	}
}
renderGameBoard()
                                       
// increase a player's wins:

// function increaseWins(player) {
// 	player.wins++
// }
// increaseWins(player1)
// increaseWins(player2)


// function changePlayerTurn(event) {
// 	if (event.target.innerHTML = '') {
// 		if (player1.currentPlayer === true){
// 			event.target.innerHTML = '🐢'
// 			player1.currentPlayer = false
// 			renderGameBoard()
// 		}  
// 	}