'use strict'

const authEvents = require('./auth/events')
// const exampleEvents = require('./examples/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  // $('#create-example').on('submit', exampleEvents.onCreateExample)
  // $('#get-all-examples').on('submit', exampleEvents.onShowAllExample)
})
