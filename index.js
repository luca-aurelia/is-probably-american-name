'use strict'
var babyNames = require('us-baby-names/by-name')
var kindOf = require('kind-of')

var capitalize = function(s) {
  s = s.toLowerCase()
  var first = s[0].toUpperCase()
  var rest = s.slice(1, s.length)
  return first + rest
}

module.exports = function(word) {
  if (!word) return false
  if (kindOf(word) !== 'string') {
    throw new TypeError(
      'isProbablyAmericanName expected a string but got ' + JSON.stringify(word)
    )
  }
  var name = capitalize(word)
  return Boolean(babyNames[name])
}
