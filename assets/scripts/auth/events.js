'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccessful)
    .catch(ui.signUpFailure)
}
const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccessful)
  //    .then(api.createGameBoard)// just showing that you can call two functions with .then()
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccessful)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccessful)
    .catch(ui.signOutFailure)
}
const onClickSignInText = function () {
  event.preventDefault()
  ui.showSignInForm()
}
const onClickNewGame = event => {
  api.createGameBoard()
    .then(ui.createNewGameSuccessful)
    .catch(ui.createNewGameFailure)
}
const onTopLeftSquareClick = event => {
  // make square not clickable.
  api.updateAPIGameBoard()
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onClickSignInText,
  onClickNewGame,
  onTopLeftSquareClick

}
