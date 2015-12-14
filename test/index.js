/**
 * Imports
 */

var supportsGen = require('..')
var test = require('tape')
var semver = require('semver')

/**
 * Tests
 */

test('should support on node gt 4.0.0', function (t) {
  t.equal(supportsGen(), supports())
  t.end()
})

function supports () {
  var currentVersion = process.env.TRAVIS_NODE_VERSION || process.env.NVM_BIN.match(/.*v(\d+\.\d+\.\d+).*/)[1]
  while (currentVersion.split('.').length < 3) {
    currentVersion = currentVersion + '.0'
  }
  return semver.gt(currentVersion, '4.0.0')
}
