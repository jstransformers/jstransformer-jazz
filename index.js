'use strict'

var jazz = require('jazz')

exports.name = 'jazz'
exports.outputFormat = 'html'

exports.renderFileAsync = function (file, options, locals) {
  var template = jazz.compile(file, options)
  return new Promise(function (resolve, reject) {
    template.eval(locals, function (output) {
      if (output) {
        resolve(output)
      } else {
        reject(output)
      }
    })
  })
}
