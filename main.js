// QUERY SELECTORS:
var entireGameBoard = document.querySelector('.grid-container')
var squares = document.querySelectorAll('.square')
var player1Score = document.querySelector('.player-1-score')
var player2Score = document.querySelector('.player-2-score')


// EVENT LISTENERS:

entireGameBoard.addEventListener('click', function (event) {
	// console.log(event.target)
	if (event.target.classList.contains('square')) {
		changePlayerTurn(event)
		// console.log('hello')
		var winner = checkForWin()
		if (winner === player1) {
			player1Score.innerHTML += 1
		} else if (winner === player2) {
			player2Score.innerHTML += 1
		}
		renderGameBoard(gameBoard)
	}

});

// GLOBAL VARIABLES:

var gameBoard = [null, null, null, null, null, null, null, null, null]



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
		entireGameBoard.children[i].innerHTML = gameBoard[i]
	}
}


function changePlayerTurn(event) {
	if (player1.currentPlayer === true) {
		var playerMove = parseInt(event.target.getAttribute("id"))
		gameBoard[playerMove] = '🐢'
		player1.currentPlayer = false
		player2.currentPlayer = true
		renderGameBoard(gameBoard)

	} else {
		var playerMove = parseInt(event.target.getAttribute("id"))
		gameBoard[playerMove] = '🐰'
		player2.currentPlayer = false
		player1.currentPlayer = true
		renderGameBoard(gameBoard)
	}
	checkForWin()
}

function checkForWin() {
	var winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	]

	for (var i = 0; i < winningCombinations.length; i++) {
		var combination = winningCombinations[i]
		var isWinningCombination = true
		var move = gameBoard[combination[0]]
		console.log(move)
		for (var j = 0; j < combination.length; j++) {
			var index = combination[j]
			if (!gameBoard[index] || gameBoard[index] !== move) {
				isWinningCombination = false
				break;
			}
		}
		if (isWinningCombination === true) {
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
