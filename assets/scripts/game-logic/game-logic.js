'use strict'

const store = require('./../store')
const api = require('./../auth/api')
// const events = require('../auth/events')
// const app = require('./../app')

let playersTurn = 'X'
let cellIndex
let numGameMoves = 0
let gameOver = false
let gameBoardArray = []

const onClickBoardTL = function () {
  cellIndex = 0
  if (playersTurn === 'X') {
    $('#top-left').text('X')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    gameBoardArray[cellIndex] = playersTurn
    playersTurn = 'O'
  } else {
    $('#top-left').text('O')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    gameBoardArray[cellIndex] = playersTurn
    playersTurn = 'X'
  }
  numGameMoves++
  if (numGameMoves > 4) {
    isGameOver()
  }
}
const isGameOver = function () {
  if ((gameBoardArray[0] != null) && (gameBoardArray[0] === gameBoardArray[1]) && (gameBoardArray[0] === gameBoardArray[2])) {
    console.log('Game OVER')
  }
  if ((gameBoardArray[3] != null) && (gameBoardArray[3] === gameBoardArray[4]) && (gameBoardArray[3] === gameBoardArray[5])) {
    console.log('Game OVER')
  }
  if ((gameBoardArray[6] != null) && (gameBoardArray[6] === gameBoardArray[7]) && (gameBoardArray[6] === gameBoardArray[8])) {
    console.log('Game OVER')
  }
  if ((gameBoardArray[0] != null) && (gameBoardArray[0] === gameBoardArray[3]) && (gameBoardArray[0] === gameBoardArray[6])) {
    console.log('Game OVER')
  }
  if ((gameBoardArray[1] != null) && (gameBoardArray[1] === gameBoardArray[4]) && (gameBoardArray[1] === gameBoardArray[7])) {
    console.log('Game OVER')
  }
  if ((gameBoardArray[2] != null) && (gameBoardArray[2] === gameBoardArray[5]) && (gameBoardArray[2] === gameBoardArray[8])) {
    console.log('Game OVER')
  }
  if ((gameBoardArray[0] != null) && (gameBoardArray[0] === gameBoardArray[4]) && (gameBoardArray[0] === gameBoardArray[8])) {
    console.log('Game OVER')
  }
  if ((gameBoardArray[2] != null) && (gameBoardArray[2] === gameBoardArray[4]) && (gameBoardArray[2] === gameBoardArray[6])) {
    console.log('Game OVER')
  }
}

const onClickBoardTM = function () {
  cellIndex = 1
  if (playersTurn === 'X') {
    $('#top-middle').text('X')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    gameBoardArray[cellIndex] = playersTurn
    playersTurn = 'O'
  } else {
    $('#top-middle').text('O')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    gameBoardArray[cellIndex] = playersTurn
    playersTurn = 'X'
  }
  numGameMoves++
  if (numGameMoves > 4) {
    isGameOver()
  }
}

const onClickBoardTR = function () {
  cellIndex = 2
  if (playersTurn === 'X') {
    $('#top-right').text('X')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    gameBoardArray[cellIndex] = playersTurn
    playersTurn = 'O'
  } else {
    $('#top-right').text('O')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    gameBoardArray[cellIndex] = playersTurn
    playersTurn = 'X'
  }
  numGameMoves++
  if (numGameMoves > 4) {
    isGameOver()
  }
}
const onClickBoardML = function () {
  cellIndex = 3
  if (playersTurn === 'X') {
    $('#middle-left').text('X')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    gameBoardArray[cellIndex] = playersTurn
    playersTurn = 'O'
  } else {
    $('#middle-left').text('O')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    gameBoardArray[cellIndex] = playersTurn
    playersTurn = 'X'
  }
  numGameMoves++
  if (numGameMoves > 4) {
    isGameOver()
  }
}

const onClickBoardMM = function () {
  cellIndex = 4
  if (playersTurn === 'X') {
    $('#middle-middle').text('X')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    gameBoardArray[cellIndex] = playersTurn
    playersTurn = 'O'
  } else {
    $('#middle-middle').text('O')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    gameBoardArray[cellIndex] = playersTurn
    playersTurn = 'X'
  }
  numGameMoves++
  if (numGameMoves > 4) {
    isGameOver()
  }
}

const onClickBoardMR = function () {
  cellIndex = 5
  if (playersTurn === 'X') {
    $('#middle-right').text('X')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    gameBoardArray[cellIndex] = playersTurn
    playersTurn = 'O'
  } else {
    $('#middle-right').text('O')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    gameBoardArray[cellIndex] = playersTurn
    playersTurn = 'X'
  }
  numGameMoves++
  if (numGameMoves > 4) {
    console.log('inside num > 4')
    isGameOver()
  }
}
const onClickBoardBL = function () {
  cellIndex = 6
  if (playersTurn === 'X') {
    $('#bottom-left').text('X')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    gameBoardArray[cellIndex] = playersTurn
    playersTurn = 'O'
  } else {
    $('#bottom-left').text('O')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    gameBoardArray[cellIndex] = playersTurn
    playersTurn = 'X'
  }
  numGameMoves++
  if (numGameMoves > 4) {
    isGameOver()
  }
}

const onClickBoardBM = function () {
  cellIndex = 7
  if (playersTurn === 'X') {
    $('#bottom-middle').text('X')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    gameBoardArray[cellIndex] = playersTurn
    playersTurn = 'O'
  } else {
    $('#bottom-middle').text('O')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    gameBoardArray[cellIndex] = playersTurn
    playersTurn = 'X'
  }
  numGameMoves++
  if (numGameMoves > 4) {
    isGameOver()
  }
}

const onClickBoardBR = function () {
  cellIndex = 8
  if (playersTurn === 'X') {
    $('#bottom-right').text('X')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    gameBoardArray[cellIndex] = playersTurn
    playersTurn = 'O'
  } else {
    $('#bottom-right').text('O')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    gameBoardArray[cellIndex] = playersTurn
    playersTurn = 'X'
  }
  numGameMoves++
  if (numGameMoves > 4) {
    isGameOver()
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
  onClickBoardBR

}
