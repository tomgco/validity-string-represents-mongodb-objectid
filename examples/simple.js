var validity = require('validity')
  , schemata = require('schemata')
  , stringRepresentsObjectId = require('../')

var schema = schemata(
    { linkedObjectId:
      { type: String
      , validators:
        { all: [stringRepresentsObjectId()]
        }
      }
      , otherObjectId:
      { type: String
      }
    })

schema.validate({ linkedObjectId: 'noidhere', linkedObjectId: 'notanid' }, function (error, valid) {
  // Show the error
  console.log(valid)
})