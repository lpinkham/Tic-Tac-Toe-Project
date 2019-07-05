'use strict'

const store = require('./../store')
const api = require('./../auth/api')
// const events = require('../auth/events')
const ui = require('./../auth/ui')

let playersTurn = 'X'
let numGameMoves = 0
let gameOver = false
let isThereAWinner = false
let TL, TM, TR, ML, MM, MR, BL, BM, BR
let gameMoves = []
// let index
let numXWins = 0
let numOWins = 0
let numDraws = 0

const clearGameHistory = () => {
  numXWins = 0
  numOWins = 0
  numDraws = 0
  ui.showNumWinMessage(`Player X has  ${numXWins} wins. Player O has ${numOWins} wins. There are ${numDraws} draws.`)
}
const clearSquares = () => {
  TM = TR = ML = MM = MR = BL = BM = BR = TL = false
  gameOver = false
  playersTurn = 'X'
  numGameMoves = 0
  gameMoves = []
  isThereAWinner = false
}

const changePlayersTurn = () => {
  if (gameOver === true) {
    ui.showGameMessage(`Game Over. Player ${playersTurn} won.`)
    TM = TR = ML = MM = MR = BL = BM = BR = TL = true
    isThereAWinner = true
    if (playersTurn === 'X') {
      numXWins++
    } else if (playersTurn === 'O') {
      numOWins++
    }
  } else if ((numGameMoves === 9) && (isThereAWinner === false)) {
    ui.showGameMessage(`Game Over. It was a draw.`)
    numDraws++
  } else {
    if (playersTurn === 'X') {
      playersTurn = 'O'
      ui.showGameMessage(`It is player ${playersTurn} turn.`)
    } else {
      playersTurn = 'X'
      ui.showGameMessage(`It is player ${playersTurn} turn.`)
    }
  }
  ui.showNumWinMessage(`Player X has  ${numXWins} wins. Player O has ${numOWins} wins. There are ${numDraws} draws.`)
}
// rewriting the below function so I can have just one and pass it the square
// const onClickBoard = (squareId) => {
//   clearSquares() // only need this until I get it working then the new game button will do this
// if (squareId !== true) {
//   // console.log(squareId)
// switch (squareId) {
//   case 'tl':
//   console.log('in switch TL')
//     $('#tl').text(`${playersTurn}`)
//     index = 0
//     break
//   case 'tm':
//       $('#tm').text(`${playersTurn}`)
//       index = 1
//       break
//   default:
//     console.log('couldnt update the board')
// }
//  store.newGame.cells[index] = playersTurn
//  api.updateAPIGameBoard(playersTurn, index , store.newGame.over)
//    .then(ui.updateGameSuccess)
//  numGameMoves++
//  isGameOver()
//  changePlayersTurn()
//  squareId = true
// }
// }

const onClickBoardTL = function () {
  if (TL !== true) {
    gameMoves[0] = playersTurn
    $('#top-left').text(`${playersTurn}`)
    api.updateAPIGameBoard(playersTurn, 0, false)
      .then(ui.updateGameSuccess)
    numGameMoves++
    isGameOver()
    changePlayersTurn()
    TL = true
  }
}

const onClickBoardTM = function () {
  if (TM !== true) {
    gameMoves[1] = playersTurn
    $('#top-middle').text(`${playersTurn}`)
    api.updateAPIGameBoard(playersTurn, 1, false)
      .then(ui.updateGameSuccess)
    numGameMoves++
    isGameOver()
    changePlayersTurn()
    TM = true
  }
}

const onClickBoardTR = function () {
  if (TR !== true) {
    gameMoves[2] = playersTurn
    $('#top-right').text(`${playersTurn}`)
    api.updateAPIGameBoard(playersTurn, 2, false)
      .then(ui.updateGameSuccess)
    numGameMoves++
    isGameOver()
    changePlayersTurn()
    TR = true
  }
}

const onClickBoardML = function () {
  if (ML !== true) {
    gameMoves[3] = playersTurn
    $('#middle-left').text(`${playersTurn}`)
    api.updateAPIGameBoard(playersTurn, 3, false)
      .then(ui.updateGameSuccess)
    numGameMoves++
    isGameOver()
    changePlayersTurn()
    ML = true
  }
}

const onClickBoardMM = function () {
  if (MM !== true) {
    gameMoves[4] = playersTurn
    $('#middle-middle').text(`${playersTurn}`)
    api.updateAPIGameBoard(playersTurn, 4, false)
      .then(ui.updateGameSuccess)
    numGameMoves++
    isGameOver()
    changePlayersTurn()
    MM = true
  }
}

const onClickBoardMR = function () {
  if (MR !== true) {
    gameMoves[5] = playersTurn
    $('#middle-right').text(`${playersTurn}`)
    api.updateAPIGameBoard(playersTurn, 5, false)
      .then(ui.updateGameSuccess)
    numGameMoves++
    isGameOver()
    changePlayersTurn()
    MR = true
  }
}

const onClickBoardBL = function () {
  if (BL !== true) {
    gameMoves[6] = playersTurn
    $('#bottom-left').text(`${playersTurn}`)
    api.updateAPIGameBoard(playersTurn, 6, false)
      .then(ui.updateGameSuccess)
    numGameMoves++
    isGameOver()
    changePlayersTurn()
    BL = true
  }
}

const onClickBoardBM = function () {
  if (BM !== true) {
    gameMoves[7] = playersTurn
    $('#bottom-middle').text(`${playersTurn}`)
    api.updateAPIGameBoard(playersTurn, 7, false)
      .then(ui.updateGameSuccess)
    numGameMoves++
    isGameOver()
    changePlayersTurn()
    BM = true
  }
}

const onClickBoardBR = function () {
  if (BR !== true) {
    gameMoves[8] = playersTurn
    $('#bottom-right').text(`${playersTurn}`)
    api.updateAPIGameBoard(playersTurn, 8, false)
      .then(ui.updateGameSuccess)
    numGameMoves++
    isGameOver()
    changePlayersTurn()
    BR = true
  }
}

const isGameOver = () => {
  api.showAPIGameBoard()
    .then(ui.updateGameSuccess)
  if (numGameMoves > 4) {
    // this works except that the array is one behind the actual play so I created array gameMoves to hold the squares.
    // if ((store.newGame.cells[0] != null) && (store.newGame.cells[0] === store.newGame.cells[1]) && (store.newGame.cells[0] === store.newGame.cells[2])) {
    if ((gameMoves[0] !== undefined) && (gameMoves[0] === gameMoves[1]) && (gameMoves[0] === gameMoves[2])) {
      gameOver = true
    //   ui.showNumWinMessage('Player X has ', numXWins, ' Player O has ', numOWins, ' There are ', numDraws, ' draws.')
    }
    if ((gameMoves[3] !== undefined) && (gameMoves[3] === gameMoves[4]) && (gameMoves[3] === gameMoves[5])) {
      gameOver = true
    }
    if ((gameMoves[6] !== undefined) && (gameMoves[6] === gameMoves[7]) && (gameMoves[6] === gameMoves[8])) {
      gameOver = true
    }
    if ((gameMoves[0] !== undefined) && (gameMoves[0] === gameMoves[3]) && (gameMoves[0] === gameMoves[6])) {
      gameOver = true
    }
    if ((gameMoves[1] !== undefined) && (gameMoves[1] === gameMoves[4]) && (gameMoves[1] === gameMoves[7])) {
      gameOver = true
    }
    if ((gameMoves[2] !== undefined) && (gameMoves[2] === gameMoves[5]) && (gameMoves[2] === gameMoves[8])) {
      gameOver = true
    }
    if ((gameMoves[0] !== undefined) && (gameMoves[0] === gameMoves[4]) && (gameMoves[0] === gameMoves[8])) {
      gameOver = true
    }
    if ((gameMoves[2] !== undefined) && (gameMoves[2] === gameMoves[4]) && (gameMoves[2] === gameMoves[6])) {
      gameOver = true
    }
  }
}

module.exports = {
  onClickBoardTL,
  onClickBoardTM,
  onClickBoardTR,
  onClickBoardML,
  onClickBoardMM,
  onClickBoardMR,
  onClickBoardBL,
  onClickBoardBM,
  onClickBoardBR,
  clearSquares,
  changePlayersTurn,
  clearGameHistory

}
