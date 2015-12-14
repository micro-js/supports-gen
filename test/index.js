/**
 * Imports
 */

var supportsGen = require('..')
var test = require('tape')
var semver = require('semver')

/**
 * Tests
 */

test('should support on node gt 0.11.3', function (t) {
  t.equal(supportsGen(), supports())
  t.end()
})

function supports () {
  var currentVersion = process.env.TRAVIS_NODE_VERSION || process.env.NVM_BIN.match(/.*v(\d+\.\d+\.\d+).*/)[1]
  return semver.gt(currentVersion, '0.11.3')
}
