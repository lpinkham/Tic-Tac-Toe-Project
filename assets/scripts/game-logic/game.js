'use strict'

const store = require('./../store')
const api = require('./../auth/api')
// const events = require('../auth/events')
const ui = require('./../auth/ui')

let playersTurn = 'X'
let TL, TM, TR, ML, MM, MR, BL, BM, BR
let isThereAWinner

const onClickBoardTL = function () {
//  console.log(store.newGame.over)
  if (store.newGame.over === false) {
    if (TL === false) {
      $('#top-left').text(`${playersTurn}`)
      api.updateAPIGameBoard(playersTurn, 0, false)
      // api.showAPIGameBoard()
        .then(ui.updateGameSuccess)
      if (playersTurn === 'X') {
        playersTurn = 'O'
      } else {
        playersTurn = 'X'
      }
    }
    isGameOver()
    // console.log('store cells ', store.newGame.cells[0])
  } else {
    // game is over
    ui.showGameMessage(`Game Over. Player  ${playersTurn} won`)
    // tell user game is Over
    // set all squares to true so they can't be clicked in
    TM = TR = ML = MM = MR = BL = BM = BR = TL = true
  }
}

const onClickBoardTM = function (square) {
//  console.log(store.newGame.over)
  if (store.newGame.over === false) {
    if (playersTurn === 'X') {
      $('#top-middle').text(`${playersTurn}`)
      playersTurn = 'O'
    } else {
      $('#top-middle').text('O')
      playersTurn = 'X'
    }
    api.updateAPIGameBoard(playersTurn, 1, false)
    // api.showAPIGameBoard()
      .then(ui.updateGameSuccess)
  }
}
const isGameOver = () => {
  if ((store.newGame.cells[0] != null) && (store.newGame.cells[0] === store.newGame.cells[1]) && (store.newGame.cells[0] === store.newGame.cells[2])) {
    store.newGame.over = true
    TM = TR = ML = MM = MR = BL = BM = BR = TL = true
    isThereAWinner = true
  }
  if ((store.newGame.cells[3] != null) && (store.newGame.cells[3] === store.newGame.cells[4]) && (store.newGame.cells[3] === store.newGame.cells[5])) {
    store.newGame.over = true
    TL = TM = TR = ML = MM = MR = BL = BM = BR = true
    isThereAWinner = true
  }
  if ((store.newGame.cells[6] != null) && (store.newGame.cells[6] === store.newGame.cells[7]) && (store.newGame.cells[6] === store.newGame.cells[8])) {
    store.newGame.over = true
    TM = TR = ML = MM = MR = BL = BM = BR = TL = true
    isThereAWinner = true
  }
  if ((store.newGame.cells[0] != null) && (store.newGame.cells[0] === store.newGame.cells[3]) && (store.newGame.cells[0] === store.newGame.cells[6])) {
    store.newGame.over = true
    TM = TR = ML = MM = MR = BL = BM = BR = TL = true
    isThereAWinner = true
  }
  if ((store.newGame.cells[1] != null) && (store.newGame.cells[1] === store.newGame.cells[4]) && (store.newGame.cells[1] === store.newGame.cells[7])) {
    store.newGame.over = true
    TM = TR = ML = MM = MR = BL = BM = BR = TL = true
    isThereAWinner = true
  }
  if ((store.newGame.cells[2] != null) && (store.newGame.cells[2] === store.newGame.cells[5]) && (store.newGame.cells[2] === store.newGame.cells[8])) {
    store.newGame.over = true
    TM = TR = ML = MM = MR = BL = BM = BR = TL = true
    isThereAWinner = true
  }
  if ((store.newGame.cells[0] != null) && (store.newGame.cells[0] === store.newGame.cells[4]) && (store.newGame.cells[0] === store.newGame.cells[8])) {
    store.newGame.over = true
    TM = TR = ML = MM = MR = BL = BM = BR = TL = true
    isThereAWinner = true
  }
  if ((store.newGame.cells[2] != null) && (store.newGame.cells[2] === store.newGame.cells[4]) && (store.newGame.cells[2] === store.newGame.cells[6])) {
    store.newGame.over = true
    TM = TR = ML = MM = MR = BL = BM = BR = TL = true
    isThereAWinner = true
  }
}

module.exports = {
  onClickBoardTL,
  onClickBoardTM
}
