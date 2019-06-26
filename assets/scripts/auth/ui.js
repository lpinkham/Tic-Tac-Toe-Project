'use strict'

const store = require('../store')

// helper function
const successMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}
const failureMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('form').trigger('reset')
}
const hideShow = () => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
}
const showHide = () => {
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}
// end of helper functions

const signUpSuccessful = responseData => {
  successMessage('You signed up successfully')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').hide()
  $('#sign-in').show()
}

const signUpFailure = responseData => {
  failureMessage('You failed to sign up')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').hide()
}

const signInSuccessful = responseData => {
  successMessage('You signed in successfully')
  store.user = responseData.user
  showHide()
}

const signInFailure = responseData => {
  failureMessage('You failed to sign in')
  hideShow()
}

const changePasswordSuccessful = responseData => {
  successMessage('You changed your password successfully')
  showHide()
}

const changePasswordFailure = responseData => {
  failureMessage('You failed to change your password')
  showHide()
}

const signOutSuccessful = () => {
  successMessage('You signed out successfully')
  hideShow()
}

const signOutFailure = () => {
  failureMessage('You failed to sign out')
  showHide()
}

module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure,
  successMessage,
  failureMessage,
  changePasswordSuccessful,
  changePasswordFailure,
  signOutSuccessful,
  signOutFailure
}
