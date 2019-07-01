'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const gameLogic = require('./../game-logic/game-logic.js')

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
    .then(gameLogic.clearSquares)
    .catch(ui.createNewGameFailure)
}

const onMyAccount = event => {
  // event.preventDefault()
  ui.showMyAccount()
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onClickSignInText,
  onClickNewGame,
  onMyAccount

}
