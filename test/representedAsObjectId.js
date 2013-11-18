var assert = require('assert')
  , fixtures =
    { valid:
      { id: '528a0b38b4e7250000000095'
      }
    , invalid:
      { id: 'kidks97654534'
      }
    }
  , representsObjectId = require('../')

describe('string-represents-mongodb-objectid', function () {

  it('should return a function', function () {
    var fn = representsObjectId()
    assert.equal(typeof fn, 'function')
  })

  it('should succeed with valid object', function () {
    var fn = representsObjectId()

    fn('id', 'Id', fixtures.valid, function (error, valid) {
      assert.equal(valid, undefined)
    })
  })

  it('should not succeed with invalid object', function () {
    var fn = representsObjectId()

    fn('id', 'Id', fixtures.invalid, function (error, valid) {
      assert.equal(valid, 'Id must be an ObjectID')
    })
  })

  it('should not error if object is missing property', function () {
    var fn = representsObjectId()

    fn('foo', 'bar', fixtures.valid, function (error, valid) {
      assert.equal(error, null)
    })
  })
})