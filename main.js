// QUERY SELECTORS:
var entireGameBoard = document.querySelector('.grid-container')
var squares = document.querySelectorAll('.square')


// EVENT LISTENERS:

entireGameBoard.addEventListener('click', function (event) {
	// console.log(event.target)
	if (event.target.classList.contains('square')) {
		changePlayerTurn(event)
		// console.log('hello')
		var winner = checkForWin()
		if (winner !== null) {
			console.log(winner.id + ' is the winner!')
			console.log('Total wins: ' + winner.wins)
		}

	}

});


// GLOBAL VARIABLES:

var gameBoard = [
	{
		move: null
	},
	{
		move: null
	},
	{
		move: null
	},
	{
		move: null
	},
	{
		move: null
	},
	{
		move: null
	},
	{
		move: null
	},
	{
		move: null
	},
	{
		move: null
	}
]


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

function renderGameBoard(gameBoard) {
	for (var i = 0; i < entireGameBoard.children.length; i++) {
		entireGameBoard.children[i].innerHTML = gameBoard[i].move
	}
}
renderGameBoard(gameBoard)


function changePlayerTurn(event) {
	if (player1.currentPlayer === true) {
		var playerMove = parseInt(event.target.getAttribute("id"))
		gameBoard[playerMove].move = '🐢'
		player1.currentPlayer = false
		player2.currentPlayer = true
		checkForWin()
		renderGameBoard(gameBoard)

	} else {
		var playerMove = parseInt(event.target.getAttribute("id"))
		gameBoard[playerMove].move = '🐰'
		player2.currentPlayer = false
		player1.currentPlayer = true
		checkForWin()
		renderGameBoard(gameBoard)
	}
}

function checkForWin() {
	var winningPositions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	]

	for (var i = 0; i < winningPositions.length; i++) {
		var position = winningPositions[i]
		var isWinningPosition = true
		var move = gameBoard[position[0]].move

		for (var j = 0; j < position.length; j++) {
			var index = position[j]
			if (!gameBoard[index].move || gameBoard[index].move !== move) {
				isWinningPosition = false
				break;
			}
		}
		if (isWinningPosition === true) {
			if (move === '🐢') {
				player1.wins++
				return player1
			} else if (move === '🐰') {
				player2.wins++
				return player2
			}
		}
	}
	return null
}
