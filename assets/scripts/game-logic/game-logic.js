'use strict'

// const store = require('./../store')
const api = require('./../auth/api')
// const events = require('../auth/events')
const ui = require('./../auth/ui')

let playersTurn = 'X'
let numGameMoves = 0
let gameOver = false

// make store cells array equal the gameBoardArray
let gameBoardArray = []
let TL, TM, TR, ML, MM, MR, BL, BM, BR

const clearSquares = () => {
  TM = TR = ML = MM = MR = BL = BM = BR = TL = false
  gameOver = false
  playersTurn = 'X'
  numGameMoves = 0
  gameBoardArray = []
}
const onClickBoardTL = function () {
  if (TL !== true) {
    if (playersTurn === 'X') {
      $('#top-left').text('X')
      api.updateAPIGameBoard(playersTurn, 0, gameOver)
      gameBoardArray[0] = playersTurn
    } else {
      $('#top-left').text('O')
      api.updateAPIGameBoard(playersTurn, 0, gameOver)
      gameBoardArray[0] = playersTurn
    }
    numGameMoves++
    TL = true
    isGameOver()
    if (gameOver === true) {
      ui.showGameMessage(`Game Over. Player  ${playersTurn} won`)
    } else {
      if (playersTurn === 'X') {
        playersTurn = 'O'
        ui.showGameMessage(`Player O it is your turn.`)
      } else {
        playersTurn = 'X'
        ui.showGameMessage(`Player X it is your turn.`)
      }
    }
  }
}

const onClickBoardTM = function () {
  if (TM !== true) {
    if (playersTurn === 'X') {
      $('#top-middle').text('X')
      api.updateAPIGameBoard(playersTurn, 1, gameOver)
      gameBoardArray[1] = playersTurn
    } else {
      $('#top-middle').text('O')
      api.updateAPIGameBoard(playersTurn, 1, gameOver)
      gameBoardArray[1] = playersTurn
    }
    numGameMoves++
    TM = true
    isGameOver()
    if (gameOver === true) {
      ui.showGameMessage(`Game Over. Player  ${playersTurn} won`)
    } else {
      if (playersTurn === 'X') {
        playersTurn = 'O'
        ui.showGameMessage(`Player O it is your turn.`)
      } else {
        playersTurn = 'X'
        ui.showGameMessage(`Player X it is your turn.`)
      }
    }
  }
}

const onClickBoardTR = function () {
  if (TR !== true) {
    if (playersTurn === 'X') {
      $('#top-right').text('X')
      api.updateAPIGameBoard(playersTurn, 2, gameOver)
      gameBoardArray[2] = playersTurn
    } else {
      $('#top-right').text('O')
      api.updateAPIGameBoard(playersTurn, 2, gameOver)
      gameBoardArray[2] = playersTurn
    }
    numGameMoves++
    TR = true
    isGameOver()
    if (gameOver === true) {
      ui.showGameMessage(`Game Over. Player  ${playersTurn} won`)
    } else {
      if (playersTurn === 'X') {
        playersTurn = 'O'
        ui.showGameMessage(`Player O it is your turn.`)
      } else {
        playersTurn = 'X'
        ui.showGameMessage(`Player X it is your turn.`)
      }
    }
  }
}
const onClickBoardML = function () {
  if (ML !== true) {
    if (playersTurn === 'X') {
      $('#middle-left').text('X')
      api.updateAPIGameBoard(playersTurn, 3, gameOver)
      gameBoardArray[3] = playersTurn
    } else {
      $('#middle-left').text('O')
      api.updateAPIGameBoard(playersTurn, 3, gameOver)
      gameBoardArray[3] = playersTurn
    }
    numGameMoves++
    ML = true
    isGameOver()
    if (gameOver === true) {
      ui.showGameMessage(`Game Over. Player  ${playersTurn} won`)
    } else {
      if (playersTurn === 'X') {
        playersTurn = 'O'
        ui.showGameMessage(`Player O it is your turn.`)
      } else {
        playersTurn = 'X'
        ui.showGameMessage(`Player X it is your turn.`)
      }
    }
  }
}

const onClickBoardMM = function () {
  if (MM !== true) {
    if (playersTurn === 'X') {
      $('#middle-middle').text('X')
      api.updateAPIGameBoard(playersTurn, 4, gameOver)
      gameBoardArray[4] = playersTurn
    } else {
      $('#middle-middle').text('O')
      api.updateAPIGameBoard(playersTurn, 4, gameOver)
      gameBoardArray[4] = playersTurn
    }
    numGameMoves++
    MM = true
    isGameOver()
    if (gameOver === true) {
      ui.showGameMessage(`Game Over. Player  ${playersTurn} won`)
    } else {
      if (playersTurn === 'X') {
        playersTurn = 'O'
        ui.showGameMessage(`Player O it is your turn.`)
      } else {
        playersTurn = 'X'
        ui.showGameMessage(`Player X it is your turn.`)
      }
    }
  }
}

const onClickBoardMR = function () {
  if (MR !== true) {
    if (playersTurn === 'X') {
      $('#middle-right').text('X')
      api.updateAPIGameBoard(playersTurn, 5, gameOver)
      gameBoardArray[5] = playersTurn
    } else {
      $('#middle-right').text('O')
      api.updateAPIGameBoard(playersTurn, 5, gameOver)
      gameBoardArray[5] = playersTurn
    }
    numGameMoves++
    MR = true
    isGameOver()
    if (gameOver === true) {
      ui.showGameMessage(`Game Over. Player  ${playersTurn} won`)
    } else {
      if (playersTurn === 'X') {
        playersTurn = 'O'
        ui.showGameMessage(`Player O it is your turn.`)
      } else {
        playersTurn = 'X'
        ui.showGameMessage(`Player X it is your turn.`)
      }
    }
  }
}
const onClickBoardBL = function () {
  if (BL !== true) {
    if (playersTurn === 'X') {
      $('#bottom-left').text('X')
      api.updateAPIGameBoard(playersTurn, 6, gameOver)
      gameBoardArray[6] = playersTurn
    } else {
      $('#bottom-left').text('O')
      api.updateAPIGameBoard(playersTurn, 6, gameOver)
      gameBoardArray[6] = playersTurn
    }
    numGameMoves++
    BL = true
    isGameOver()
    if (gameOver === true) {
      ui.showGameMessage(`Game Over. Player  ${playersTurn} won`)
    } else {
      if (playersTurn === 'X') {
        playersTurn = 'O'
        ui.showGameMessage(`Player O it is your turn.`)
      } else {
        playersTurn = 'X'
        ui.showGameMessage(`Player X it is your turn.`)
      }
    }
  }
}

const onClickBoardBM = function () {
  if (BM !== true) {
    if (playersTurn === 'X') {
      $('#bottom-middle').text('X')
      api.updateAPIGameBoard(playersTurn, 7, gameOver)
      gameBoardArray[7] = playersTurn
    } else {
      $('#bottom-middle').text('O')
      api.updateAPIGameBoard(playersTurn, 7, gameOver)
      gameBoardArray[7] = playersTurn
    }
    numGameMoves++
    BM = true
    isGameOver()
    if (gameOver === true) {
      ui.showGameMessage(`Game Over. Player  ${playersTurn} won`)
    } else {
      if (playersTurn === 'X') {
        playersTurn = 'O'
        ui.showGameMessage(`Player O it is your turn.`)
      } else {
        playersTurn = 'X'
        ui.showGameMessage(`Player X it is your turn.`)
      }
    }
  }
}

const onClickBoardBR = function () {
  if (BR !== true) {
    if (playersTurn === 'X') {
      $('#bottom-right').text('X')
      // api.updateAPIGameBoard(playersTurn, 8, gameOver)
      // gameBoardArray[8] = playersTurn
    } else {
      $('#bottom-right').text('O')
      // api.updateAPIGameBoard(playersTurn, 8, gameOver)
      // gameBoardArray[8] = playersTurn
    }
    gameBoardArray[8] = playersTurn
    numGameMoves++
    BR = true
    isGameOver()
    if (gameOver === true) {
      ui.showGameMessage(`Game Over. Player  ${playersTurn} won`)
      api.updateAPIGameBoard(playersTurn, 8, gameOver)
    } else {
      api.updateAPIGameBoard(playersTurn, 8, gameOver)
      if (playersTurn === 'X') {
        playersTurn = 'O'
        ui.showGameMessage(`Player O it is your turn.`)
      } else {
        playersTurn = 'X'
        ui.showGameMessage(`Player X it is your turn.`)
      }
    }
  }
}

const isGameOver = () => {
  if (numGameMoves > 4) {
    if ((gameBoardArray[0] != null) && (gameBoardArray[0] === gameBoardArray[1]) && (gameBoardArray[0] === gameBoardArray[2])) {
      gameOver = true
      TM = TR = ML = MM = MR = BL = BM = BR = TL = true
    }
    if ((gameBoardArray[3] != null) && (gameBoardArray[3] === gameBoardArray[4]) && (gameBoardArray[3] === gameBoardArray[5])) {
      gameOver = true
      TM = TR = ML = MM = MR = BL = BM = BR = TL = true
    }
    if ((gameBoardArray[6] != null) && (gameBoardArray[6] === gameBoardArray[7]) && (gameBoardArray[6] === gameBoardArray[8])) {
      gameOver = true
      TM = TR = ML = MM = MR = BL = BM = BR = TL = true
    }
    if ((gameBoardArray[0] != null) && (gameBoardArray[0] === gameBoardArray[3]) && (gameBoardArray[0] === gameBoardArray[6])) {
      gameOver = true
      TM = TR = ML = MM = MR = BL = BM = BR = TL = true
    }
    if ((gameBoardArray[1] != null) && (gameBoardArray[1] === gameBoardArray[4]) && (gameBoardArray[1] === gameBoardArray[7])) {
      gameOver = true
      TM = TR = ML = MM = MR = BL = BM = BR = TL = true
    }
    if ((gameBoardArray[2] != null) && (gameBoardArray[2] === gameBoardArray[5]) && (gameBoardArray[2] === gameBoardArray[8])) {
      gameOver = true
      TM = TR = ML = MM = MR = BL = BM = BR = TL = true
    }
    if ((gameBoardArray[0] != null) && (gameBoardArray[0] === gameBoardArray[4]) && (gameBoardArray[0] === gameBoardArray[8])) {
      gameOver = true
      TM = TR = ML = MM = MR = BL = BM = BR = TL = true
    }
    if ((gameBoardArray[2] != null) && (gameBoardArray[2] === gameBoardArray[4]) && (gameBoardArray[2] === gameBoardArray[6])) {
      gameOver = true
      TM = TR = ML = MM = MR = BL = BM = BR = TL = true
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
  clearSquares

}
