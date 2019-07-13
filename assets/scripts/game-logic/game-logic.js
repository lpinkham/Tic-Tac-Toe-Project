'use strict'

// const store = require('./../store')
const api = require('./../auth/api')
// const events = require('../auth/events')
const ui = require('./../auth/ui')

let playersTurn = 'X'
let numGameMoves = 0
let gameOver = false
let isThereAWinner = false
let TL, TM, TR, ML, MM, MR, BL, BM, BR
let gameMoves = []
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
    gameOver = true
  } else {
    if (playersTurn === 'X') {
      playersTurn = 'O'
      ui.showGameMessage(`It is player ${playersTurn} turn.`)
    } else {
      playersTurn = 'X'
      ui.showGameMessage(`It is player ${playersTurn} turn.`)
    }
  }
  ui.showNumWinMessage(`Wins: player X - ${numXWins}, player O - ${numOWins}, draws - ${numDraws}.`)
}

const onClickBoardTL = function () {
  if (TL !== true) {
    gameMoves[0] = playersTurn
    $('#top-left').text(`${playersTurn}`)
    api.updateAPIGameBoard(playersTurn, 0, false)
      .then(ui.updateGameSuccess)
    numGameMoves++
    isGameOver(0, 1, 2)
    changePlayersTurn()
    TL = true
  } else if (gameOver !== true) {
    ui.showGameMessage('That square is already taken')
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
  } else if (gameOver !== true) {
    ui.showGameMessage('That square is already taken')
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
  } else if (gameOver !== true) {
    ui.showGameMessage('That square is already taken')
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
  } else if (gameOver !== true) {
    ui.showGameMessage('That square is already taken')
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
  } else if (gameOver !== true) {
    ui.showGameMessage('That square is already taken')
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
  } else if (gameOver !== true) {
    ui.showGameMessage('That square is already taken')
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
  } else if (gameOver !== true) {
    ui.showGameMessage('That square is already taken')
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
  } else if (gameOver !== true) {
    ui.showGameMessage('That square is already taken')
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
  } else if (gameOver !== true) {
    ui.showGameMessage('That square is already taken')
  }
}

const isGameOver = () => {
  api.showAPIGameBoard()
    .then(ui.updateGameSuccess)

  if (numGameMoves > 4) {
    checkIsGameOver(0, 1, 2)
    checkIsGameOver(3, 4, 5)
    checkIsGameOver(6, 7, 8)
    checkIsGameOver(0, 3, 6)
    checkIsGameOver(1, 4, 7)
    checkIsGameOver(2, 5, 8)
    checkIsGameOver(0, 4, 8)
    checkIsGameOver(2, 4, 6)
  }
}

const checkIsGameOver = (a, b, c) => {
  if ((gameMoves[a] !== undefined) && (gameMoves[a] === gameMoves[b]) && (gameMoves[a] === gameMoves[c])) {
    gameOver = true
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
