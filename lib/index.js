/**
 * Modules
 */

var memoize = require('@micro-js/memoize')
var evaluates = require('@micro-js/evaluates')

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
