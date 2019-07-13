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
    .then(gameLogic.clearGameHistory)
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
const myFunction = (event) => {
  const x = event.target
  // gameLogic.onClickBoard(x.id)
  switch (x.id) {
    case 'top-left':
      gameLogic.onClickBoardTL()
      break
    case 'top-middle':
      gameLogic.onClickBoardTM()
      break
    case 'top-right':
      gameLogic.onClickBoardTR()
      break
    case 'middle-left':
      gameLogic.onClickBoardML()
      break
    case 'middle-middle':
      gameLogic.onClickBoardMM()
      break
    case 'middle-right':
      gameLogic.onClickBoardMR()
      break
    case 'bottom-left':
      gameLogic.onClickBoardBL()
      break
    case 'bottom-middle':
      gameLogic.onClickBoardBM()
      break
    case 'bottom-right':
      gameLogic.onClickBoardBR()
      break
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onClickSignInText,
  onClickNewGame,
  onMyAccount,
  myFunction

}
