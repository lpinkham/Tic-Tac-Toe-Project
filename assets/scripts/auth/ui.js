'use strict'

const store = require('../store')

// helper function
const successMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('#message').css('color', 'green')
  $('form').trigger('reset')
}
const failureMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('#message').css('color', 'red')
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
const usersTurnHelper = () => {
  $('#top-left').text('')
  $('#top-middle').text('')
  $('#top-right').text('')
  $('#middle-left').text('')
  $('#middle-middle').text('')
  $('#middle-right').text('')
  $('#bottom-left').text('')
  $('#bottom-middle').text('')
  $('#bottom-right').text('')
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
  // successMessage('You signed in successfully')
  store.user = responseData.user
  // showHide()
  $('#sign-in').hide()
  $('#form-div').hide()
  $('#game-board').hide()
  $('#new-game-btn').show()
  $('#sign-in-text').hide()
  $('#game-play-text').hide()
  $('#account-text').show()
}
const createNewGameSuccessful = responseData => {
  store.newGame = responseData.game
  $('#game-board').show()
  $('#users-turn').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  usersTurnHelper()
}
const createNewGameFailure = responseData => {
  failureMessage('Please try again. We were unable to create a new game')
}

const signInFailure = responseData => {
  failureMessage('Please try again. Your email or password is incorrect. If you need to create an account you can do so below.')
  hideShow()
}

const changePasswordSuccessful = responseData => {
  successMessage('You changed your password successfully')
  showHide()
}

const changePasswordFailure = responseData => {
  failureMessage('Please try again. We were unable to change your password')
  showHide()
}

const signOutSuccessful = () => {
  // successMessage('You have signed out')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#new-game-btn').hide()
  $('#sign-in-text').show()
}

const signOutFailure = () => {
  failureMessage('You sign out failed. You are still logged in. Please try again.')
  showHide()
}

const showSignInForm = () => {
  $('#form-div').show()
  $('#sign-in').show()
}

const showMyAccount = () => {
  $('#myAccount').show()
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
  signOutFailure,
  showSignInForm,
  createNewGameSuccessful,
  createNewGameFailure,
  showMyAccount
}
