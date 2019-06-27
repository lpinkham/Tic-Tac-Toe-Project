'use strict'

const onClickBoard = function () {
  $('#top-left').text('X')
}

const onClickNewGame = function () {
  // creates a new game board when button clicked
  // unhide game board
  $('#game-board').show()
}
const onClickSignInBtn = function () {
  $('#sign-in').hide()
  $('#form-div').hide()
  $('#game-board').show()
  $('#sign-in-text').hide()
  $('#game-play-text').hide()
  $('#account-text').text('My Account')
}
const onClickSignInText = function () {
  $('#form-div').show()
  $('#sign-in').show()
  // $('#form-div').html('<form id="sign-in" class="center">' +
  // '<input type="email" name="credentials[email]" placeholder="Enter email address"><br>' +
  //   '<input type="password" name="credentials[password]" placeholder="Password"><br>' +
  //   '<button class="btn-primary" id="sign-in-btn">Sign-In!</button></form><br>')
  // $('#no-account').html('<p>Dont have an account? Click here to create one</p>')
}

module.exports = {
  onClickBoard,
  onClickNewGame,
  onClickSignInBtn,
  onClickSignInText

}
