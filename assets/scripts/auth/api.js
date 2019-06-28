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
const updateAPIGameBoard = (p, i, g) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.newGame.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token // store is an object that all these files have access to if you require the store file
    },
    data: {
      'game': {
        'cell': {
          'index': i,
          'value': p
        },
        'over': g
      }
    }
  })
}

const showAPIGameBoard = () => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.newGame.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token // store is an object that all these files have access to if you require the store file
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createGameBoard,
  updateAPIGameBoard,
  showAPIGameBoard
}
