/**
 * Modules
 */

var evaluates = require('@micro-js/evaluates')

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
