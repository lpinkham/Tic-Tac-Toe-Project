'use strict'

const authEvents = require('./auth/events')
const gameLogic = require('./game-logic/game-logic')
// const exampleEvents = require('./examples/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // event handler for game Board
  $('#top-left').on('click', gameLogic.onClickBoard)
  $('#new-game-btn').on('click', authEvents.onClickNewGame)
  $('#sign-in-text').on('click', authEvents.onClickSignInText)
})
