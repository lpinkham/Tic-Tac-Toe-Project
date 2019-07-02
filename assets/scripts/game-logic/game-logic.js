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

const clearSquares = () => {
  TM = TR = ML = MM = MR = BL = BM = BR = TL = false
  gameOver = false
  playersTurn = 'X'
  numGameMoves = 0
}

const changePlayersTurn = () => {
  if (gameOver === true) {
    ui.showGameMessage(`Game Over. Player ${playersTurn} won.`)
  } else {
    if (playersTurn === 'X') {
      playersTurn = 'O'
      ui.showGameMessage(`It is player ${playersTurn} turn.`)
    } else {
      playersTurn = 'X'
      ui.showGameMessage(`It is player ${playersTurn} turn.`)
    }
  }
}

const onClickBoardTL = function () {
  if (TL !== true) {
    $('#top-left').text(`${playersTurn}`)
    api.updateAPIGameBoard(playersTurn, 0, false)
      .then(ui.updateGameSuccess)
    changePlayersTurn()
  }
  numGameMoves++
  isGameOver()
}

const onClickBoardTM = function () {
  if (TM !== true) {
    $('#top-middle').text(`${playersTurn}`)
    api.updateAPIGameBoard(playersTurn, 1, false)
      .then(ui.updateGameSuccess)
    changePlayersTurn()
  }
  numGameMoves++
  isGameOver()
}

const onClickBoardTR = function () {
  if (TR !== true) {
    $('#top-right').text(`${playersTurn}`)
    api.updateAPIGameBoard(playersTurn, 2, false)
      .then(ui.updateGameSuccess)
    changePlayersTurn()
  }
  numGameMoves++
  isGameOver()
}

const onClickBoardML = function () {
  if (ML !== true) {
    $('#middle-left').text(`${playersTurn}`)
    api.updateAPIGameBoard(playersTurn, 3, false)
      .then(ui.updateGameSuccess)
    changePlayersTurn()
  }
  numGameMoves++
  isGameOver()
}

const onClickBoardMM = function () {
  if (MM !== true) {
    $('#middle-middle').text(`${playersTurn}`)
    api.updateAPIGameBoard(playersTurn, 4, false)
      .then(ui.updateGameSuccess)
    changePlayersTurn()
  }
  numGameMoves++
  isGameOver()
}

const onClickBoardMR = function () {
  if (MR !== true) {
    $('#middle-right').text(`${playersTurn}`)
    api.updateAPIGameBoard(playersTurn, 5, false)
      .then(ui.updateGameSuccess)
    changePlayersTurn()
  }
  numGameMoves++
  isGameOver()
}

const onClickBoardBL = function () {
  if (BL !== true) {
    $('#bottom-left').text(`${playersTurn}`)
    api.updateAPIGameBoard(playersTurn, 6, false)
      .then(ui.updateGameSuccess)
    changePlayersTurn()
  }
  numGameMoves++
  isGameOver()
}

const onClickBoardBM = function () {
  if (BM !== true) {
    $('#bottom-middle').text(`${playersTurn}`)
    api.updateAPIGameBoard(playersTurn, 7, false)
      .then(ui.updateGameSuccess)
    changePlayersTurn()
  }
  numGameMoves++
  isGameOver()
}

const onClickBoardBR = function () {
  if (BR !== true) {
    $('#bottom-right').text(`${playersTurn}`)
    api.updateAPIGameBoard(playersTurn, 8, false)
      .then(ui.updateGameSuccess)
    changePlayersTurn()
  }
  numGameMoves++
  isGameOver()
}

const isGameOver = () => {
  api.showAPIGameBoard()
    .then(ui.updateGameSuccess)
  if (numGameMoves > 4) {
    if ((store.newGame.cells[0] != null) && (store.newGame.cells[0] === store.newGame.cells[1]) && (store.newGame.cells[0] === store.newGame.cells[2])) {
      gameOver = true
      TM = TR = ML = MM = MR = BL = BM = BR = TL = true
      ui.showGameMessage(`Game Over. Player ${store.newGame.cells[0]} won.`)
      isThereAWinner = true
    }
    if ((store.newGame.cells[3] != null) && (store.newGame.cells[3] === store.newGame.cells[4]) && (store.newGame.cells[3] === store.newGame.cells[5])) {
      gameOver = true
      TL = TM = TR = ML = MM = MR = BL = BM = BR = true
      ui.showGameMessage(`Game Over. Player ${store.newGame.cells[3]} won.`)
      isThereAWinner = true
    }
    if ((store.newGame.cells[6] != null) && (store.newGame.cells[6] === store.newGame.cells[7]) && (store.newGame.cells[6] === store.newGame.cells[8])) {
      gameOver = true
      TM = TR = ML = MM = MR = BL = BM = BR = TL = true
      ui.showGameMessage(`Game Over. Player ${store.newGame.cells[6]} won.`)
      isThereAWinner = true
    }
    if ((store.newGame.cells[0] !== null) && (store.newGame.cells[0] === store.newGame.cells[3]) && (store.newGame.cells[0] === store.newGame.cells[6])) {
      gameOver = true
      TM = TR = ML = MM = MR = BL = BM = BR = TL = true
      ui.showGameMessage(`Game Over. Player ${store.newGame.cells[0]} won.`)
      isThereAWinner = true
    }
    if ((store.newGame.cells[1] != null) && (store.newGame.cells[1] === store.newGame.cells[4]) && (store.newGame.cells[1] === store.newGame.cells[7])) {
      gameOver = true
      TM = TR = ML = MM = MR = BL = BM = BR = TL = true
      ui.showGameMessage(`Game Over. Player ${store.newGame.cells[1]} won.`)
      isThereAWinner = true
    }
    if ((store.newGame.cells[2] != null) && (store.newGame.cells[2] === store.newGame.cells[5]) && (store.newGame.cells[2] === store.newGame.cells[8])) {
      gameOver = true
      TM = TR = ML = MM = MR = BL = BM = BR = TL = true
      ui.showGameMessage(`Game Over. Player ${store.newGame.cells[2]} won.`)
      isThereAWinner = true
    }
    if ((store.newGame.cells[0] != null) && (store.newGame.cells[0] === store.newGame.cells[4]) && (store.newGame.cells[0] === store.newGame.cells[8])) {
      gameOver = true
      TM = TR = ML = MM = MR = BL = BM = BR = TL = true
      ui.showGameMessage(`Game Over. Player ${store.newGame.cells[0]} won.`)
      isThereAWinner = true
    }
    if ((store.newGame.cells[2] != null) && (store.newGame.cells[2] === store.newGame.cells[4]) && (store.newGame.cells[2] === store.newGame.cells[6])) {
      gameOver = true
      TM = TR = ML = MM = MR = BL = BM = BR = TL = true
      ui.showGameMessage(`Game Over. Player ${store.newGame.cells[2]} won.`)
      isThereAWinner = true
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
  changePlayersTurn

}
