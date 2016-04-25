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
var microtime = require('/Users/kvz/code/phpjs/src/php/datetime/microtime.js')

describe('php.datetime.microtime.js', function () {
  it('should pass example 1', function (done) {
    timeStamp = microtime(true)
    timeStamp > 1000000000 && timeStamp < 2000000000
    var expected = true
timeStamp = microtime(true)
    var result = timeStamp > 1000000000 && timeStamp < 2000000000
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    /^0\.[0-9]{1,6} [0-9]{10,10}$/.test(microtime())
    var expected = true
    var result = /^0\.[0-9]{1,6} [0-9]{10,10}$/.test(microtime())
    expect(result).to.deep.equal(expected)
    done()
  })
})