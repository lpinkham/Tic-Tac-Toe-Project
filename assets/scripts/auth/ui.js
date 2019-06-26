'use strict'

const store = require('../store')

// helper function used for sign in functions
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
// end of helper functions

const signUpSuccessful = responseData => {
  $('#message').text('You signed up successfully')
  // this will add a css class to the message element.
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const signUpFailure = responseData => {
  $('#message').text('You failed to sign up')
  // this will add a css class to the message element.
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const signInSuccessful = responseData => {
  console.log('response data ' + responseData)
  successMessage('You signed in successfully')
  store.user = responseData.user // keeping track of the user token so we can have the token for the api
  // we use 'store' so we can access the token in any file
}

const signInFailure = responseData => {
  successMessage('You failed to sign in')
}

const changePasswordSuccessful = responseData => {
  $('#message').text('You changed your password successfully')
  // this will add a css class to the message element.
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const changePasswordFailure = responseData => {
  $('#message').text('You failed to change your password')
  // this will add a css class to the message element.
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const signOutSuccessful = () => { // don't need any parameters here because we don't have any form data
  $('#message').text('You signed out successfully')
  // this will add a css class to the message element.
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const signOutFailure = () => {
  $('#message').text('You failed to sign out')
  // this will add a css class to the message element.
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('form').trigger('reset')
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
