'use strict'

// create a function to create a function
const counterFactory = function (increment) {
  let counter = 0

return function () {
  counter += increment
}
return counter
}

let countBy = counterFactory(32)

module.exports = {
  counterFactory
}
