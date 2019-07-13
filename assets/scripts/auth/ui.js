'use strict'

const store = require('../store')

// helper function
const successMessage = message => {
  $('#message').show()
  $('#message').text(message)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('#message').css('color', 'green')
  $('form').trigger('reset')
}
const failureMessage = message => {
  $('#message').show()
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
  $('#game-message').text('Player X place your X on the board')
}

const signUpSuccessful = responseData => {
  successMessage('You signed up successfully')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#or').hide()
}

const signUpFailure = responseData => {
  failureMessage('You failed to sign up')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').hide()
}

const signInSuccessful = responseData => {
  store.user = responseData.user
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#game-board').hide()
  $('#new-game-btn').show()
  $('#game-play-text').show()
  $('#form').trigger('reset')
  $('#account-btn').show()
  $('#message').hide()
  $('#or').hide()
}
const createNewGameSuccessful = responseData => {
  store.newGame = responseData.game
  $('#game-board').show()
  $('#users-turn').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#message').hide()
  $('#or').hide()
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
  $('#change-password').hide()
  $('#message').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#new-game-btn').hide()
  $('#game-board').hide()
  $('#sign-in-text').show()
  $('#or').show()
  $('form').trigger('reset')
}

const signOutFailure = () => {
  failureMessage('Your sign out failed. You are still logged in. Please try again.')
  showHide()
}

const showSignInForm = () => {
  $('#sign-in').show()
}

const showMyAccount = () => {
  $('#myAccount').show()
  $('#change-password').show()
  $('#sign-out').show()
}

const showGameMessage = (message) => {
  $('#game-message').text(message)
}
const showNumWinMessage = (message) => {
  $('#wins').text(message)
}
const updateGameSuccess = (responseData) => {
  store.newGame = responseData.game
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
  showMyAccount,
  showGameMessage,
  showNumWinMessage,
  updateGameSuccess
}
