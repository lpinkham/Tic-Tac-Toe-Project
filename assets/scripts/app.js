'use strict'

const authEvents = require('./auth/events')
// const gameLogic = require('./game-logic/game-logic')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#account-btn').on('click', authEvents.onMyAccount)
  $('#new-game-btn').on('click', authEvents.onClickNewGame)

  $('#board-squares').on('click', authEvents.myFunction)
  $('#gamestats').on('click', authEvents.onShowStats)
})
