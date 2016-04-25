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
var strftime = require('/Users/kvz/code/phpjs/src/php/datetime/strftime.js')

describe('php.datetime.strftime.js', function () {
  it('should pass example 1', function (done) {
    strftime("%A", 1062462400); // Return value will depend on date and locale
    var expected = 'Tuesday'
    var result = strftime("%A", 1062462400); // Return value will depend on date and locale
    expect(result).to.deep.equal(expected)
    done()
  })
})