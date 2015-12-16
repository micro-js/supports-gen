/**
 * Modules
 */

var memoize = require('@f/memoize')
var evaluates = require('@f/evaluates')

evaluates = memoize(evaluates)

/**
 * Expose supportsGen
 */

module.exports = supportsGen['default'] = supportsGen

/**
 * supportsGen
 */

function supportsGen () {
  return evaluates('function * gen () {}')
}
