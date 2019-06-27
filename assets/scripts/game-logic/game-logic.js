'use strict'

const onClickBoard = function () {
  $('#top-left').text('X')
}

const onClickNewGame = function () {
  // creates a new game board when button clicked
  // unhide game board
  $('#game-board').show()
}

module.exports = {
  onClickBoard,
  onClickNewGame

}
