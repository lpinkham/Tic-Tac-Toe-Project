'use strict'

const authEvents = require('./auth/events')
const gameLogic = require('./game-logic/game-logic')
// const exampleEvents = require('./examples/events')
// let playersTurn = 'X'

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#account-text').on('click', authEvents.onMyAccount)

  // event handler for game Board
  $('#new-game-btn').on('click', authEvents.onClickNewGame)
  $('#sign-in-text').on('click', authEvents.onClickSignInText)
  // $('#top-left').on('click', authEvents.onTopLeftSquareClick)
  $('#top-left').on('click', gameLogic.onClickBoardTL)
  $('#top-middle').on('click', gameLogic.onClickBoardTM)
  $('#top-right').on('click', gameLogic.onClickBoardTR)
  $('#middle-left').on('click', gameLogic.onClickBoardML)
  $('#middle-middle').on('click', gameLogic.onClickBoardMM)
  $('#middle-right').on('click', gameLogic.onClickBoardMR)
  $('#bottom-left').on('click', gameLogic.onClickBoardBL)
  $('#bottom-middle').on('click', gameLogic.onClickBoardBM)
  $('#bottom-right').on('click', gameLogic.onClickBoardBR)
})
