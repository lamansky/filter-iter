'use strict'

const assert = require('assert')
const filterIterable = require('.')

describe('filterIterable()', function () {
  it('should return an iterator', function () {
    assert.strictEqual(typeof filterIterable([], v => v).next, 'function')
  })

  it('should only yield those items for which the callback returns true', function () {
    const evens = filterIterable([1, 2, 3, 4, 5], n => n % 2 === 0)
    assert.strictEqual(evens.next().value, 2)
    assert.strictEqual(evens.next().value, 4)
    assert.strictEqual(evens.next().done, true)
  })

  it('should only yield truthy values if no callback is given', function () {
    const truthies = filterIterable([1, 0, '2', false, 3, ''])
    assert.strictEqual(truthies.next().value, 1)
    assert.strictEqual(truthies.next().value, '2')
    assert.strictEqual(truthies.next().value, 3)
    assert.strictEqual(truthies.next().done, true)
  })

  it('should support a limit argument', function () {
    const evens = filterIterable([1, 2, 3, 4, 5], n => n % 2 === 0, {limit: 1})
    assert.strictEqual(evens.next().value, 2)
    assert.strictEqual(evens.next().done, true)
  })

  it('should support a limit argument with no callback', function () {
    const truthies = filterIterable([1, 0, '2', false, 3, ''], {limit: 2})
    assert.strictEqual(truthies.next().value, 1)
    assert.strictEqual(truthies.next().value, '2')
    assert.strictEqual(truthies.next().done, true)
  })
})
