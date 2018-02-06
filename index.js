'use strict'

const isPlainObject = require('is-plain-object')
const pfn = require('pfn')

module.exports = function * filterIterable (iter, test, options) {
  if (isPlainObject(test) && !isPlainObject(options)) options = test
  const {limit = Infinity} = options || {}
  test = pfn(test)
  let i = 0
  for (const item of iter) {
    if (test(item)) {
      yield item
      if (++i >= limit) return
    }
  }
}
