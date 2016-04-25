// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
XMLHttpRequest = {} // eslint-disable-line no-native-reassign
window = {
  window: {},
  document: {
    lastModified: 1388954399,
    getElementsByTagName: function () { return [] }
  },
  location: {
    href: ""
  }
} // eslint-disable-line no-native-reassign
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var strtoupper = require('/Users/kvz/code/phpjs/src/php/strings/strtoupper.js')

describe('php.strings.strtoupper.js', function () {
  it('should pass example 1', function (done) {
    strtoupper('Kevin van Zonneveld')
    var expected = 'KEVIN VAN ZONNEVELD'
    var result = strtoupper('Kevin van Zonneveld')
    expect(result).to.deep.equal(expected)
    done()
  })
})