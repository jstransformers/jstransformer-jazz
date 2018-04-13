'use strict'

const jazz = require('jazz')

exports.name = 'jazz'
exports.outputFormat = 'html'

exports.renderFileAsync = function (file, options, locals) {
  const template = jazz.compile(file, options)
  return new Promise((resolve, reject) => {
    template.eval(locals, output => {
      if (output) {
        resolve(output)
      } else {
        reject(output)
      }
    })
  })
}
