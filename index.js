'use strict'

const jazz = require('jazz')
const merge = require('merge')

exports.name = 'jazz'
exports.outputFormat = 'html'

exports.renderAsync = function (source, options, locals) {
  const template = jazz.compile(source)
  const opts = merge(options, locals)
  return new Promise((resolve, reject) => {
    template.eval(opts, output => {
      if (output) {
        resolve(output)
      } else {
        reject(output)
      }
    })
  })
}
