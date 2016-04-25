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
var str_split = require('/Users/kvz/code/phpjs/src/php/strings/str_split.js')

describe('php.strings.str_split.js', function () {
  it('should pass example 1', function (done) {
    str_split('Hello Friend', 3)
    var expected = ['Hel', 'lo ', 'Fri', 'end']
    var result = str_split('Hello Friend', 3)
    expect(result).to.deep.equal(expected)
    done()
  })
})