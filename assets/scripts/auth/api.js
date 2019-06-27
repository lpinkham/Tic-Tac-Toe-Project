'use strict'

const config = require('../config')
const store = require('../store')

const signUp = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    data: formData,
    method: 'POST'
  })
}
const signIn = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    data: formData,
    method: 'POST'
  })
}

const changePassword = formData => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    data: formData,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token // store is an object that all these files have access to if you require the store file
    }
  })
}

const signOut = () => { // we aren't asking for any args so we don't need the formData here. it can be changed to ()
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token // store is an object that all these files have access to if you require the store file
    }
  })
}

// attempting to call API for game board object
const createGameBoard = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token // store is an object that all these files have access to if you require the store file
    }
  })
}

// update game Board
const updateAPIGameBoard = () => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.newGame.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token // store is an object that all these files have access to if you require the store file
    },
    data: {
      'game': {
        'cell': {
          'index': 0, // hard coded this for now. Need to pull in the square ID that was clicked in
          'value': 'x' // hard coded this for now. Need to pull in the value of the square, X or O
        },
        'over': false
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createGameBoard,
  updateAPIGameBoard
}
