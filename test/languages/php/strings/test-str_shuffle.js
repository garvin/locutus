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
var str_shuffle = require('/Users/kvz/code/phpjs/src/php/strings/str_shuffle.js')

describe('php.strings.str_shuffle.js', function () {
  it('should pass example 1', function (done) {
    shuffled = str_shuffle("abcdef")
    shuffled.length
    var expected = 6
shuffled = str_shuffle("abcdef")
    var result = shuffled.length
    expect(result).to.deep.equal(expected)
    done()
  })
})