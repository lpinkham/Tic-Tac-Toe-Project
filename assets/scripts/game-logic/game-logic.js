'use strict'

const store = require('./../store')
const api = require('./../auth/api')
// const events = require('../auth/events')
// const app = require('./../app')

let playersTurn = 'X'
let cellIndex
let numGameMoves = 1
let gameOver = false

const onClickBoardTL = function () {
  cellIndex = 0
  if (playersTurn === 'X') {
    $('#top-left').text('X')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    playersTurn = 'O'
  } else {
    $('#top-left').text('O')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    playersTurn = 'X'
  }
  if (numGameMoves > 4) {
    // call a function to check for a win
    console.log('store cell array is ', store.newGame)
  } else {
    // do nothing
  }
  numGameMoves++
}

const onClickBoardTM = function () {
  cellIndex = 1
  if (playersTurn === 'X') {
    $('#top-middle').text('X')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    playersTurn = 'O'
  } else {
    $('#top-middle').text('O')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    playersTurn = 'X'
  }
  numGameMoves++
}

const onClickBoardTR = function () {
  cellIndex = 2
  if (playersTurn === 'X') {
    $('#top-right').text('X')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    playersTurn = 'O'
  } else {
    $('#top-right').text('O')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    playersTurn = 'X'
  }
  numGameMoves++
}
const onClickBoardML = function () {
  cellIndex = 3
  if (playersTurn === 'X') {
    $('#middle-left').text('X')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    playersTurn = 'O'
  } else {
    $('#middle-left').text('O')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    playersTurn = 'X'
  }
  numGameMoves++
}

const onClickBoardMM = function () {
  cellIndex = 4
  if (playersTurn === 'X') {
    $('#middle-middle').text('X')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    playersTurn = 'O'
  } else {
    $('#middle-middle').text('O')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    playersTurn = 'X'
  }
  numGameMoves++
}

const onClickBoardMR = function () {
  cellIndex = 5
  if (playersTurn === 'X') {
    $('#middle-right').text('X')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    playersTurn = 'O'
  } else {
    $('#middle-right').text('O')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    playersTurn = 'X'
  }
  numGameMoves++
}
const onClickBoardBL = function () {
  cellIndex = 6
  if (playersTurn === 'X') {
    $('#bottom-left').text('X')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    playersTurn = 'O'
  } else {
    $('#bottom-left').text('O')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    playersTurn = 'X'
  }
  numGameMoves++
}

const onClickBoardBM = function () {
  cellIndex = 7
  if (playersTurn === 'X') {
    $('#bottom-middle').text('X')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    playersTurn = 'O'
  } else {
    $('#bottom-middle').text('O')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    playersTurn = 'X'
  }
  numGameMoves++
}

const onClickBoardBR = function () {
  cellIndex = 8
  if (playersTurn === 'X') {
    $('#bottom-right').text('X')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    playersTurn = 'O'
  } else {
    $('#bottom-right').text('O')
    api.updateAPIGameBoard(playersTurn, cellIndex, gameOver)
    playersTurn = 'X'
  }
  numGameMoves++
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
