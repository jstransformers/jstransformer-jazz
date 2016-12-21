'use strict'

var jazz = require('jazz')
var Promise = require('promise')

exports.name = 'jazz'
exports.outputFormat = 'html'

exports.renderAsync = function (str, options, locals) {
  var template = jazz.compile(str, options)
  return new Promise(function (resolve, reject) {
    template.eval(locals, function (data) {
      if (data) {
        resolve(data)
      } else {
        reject(data)
      }
    })
  })
}
