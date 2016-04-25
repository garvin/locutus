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
var metaphone = require('/Users/kvz/code/phpjs/src/php/strings/metaphone.js')

describe('php.strings.metaphone.js', function () {
  it('should pass example 1', function (done) {
    metaphone('Gnu')
    var expected = 'N'
    var result = metaphone('Gnu')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    metaphone('bigger')
    var expected = 'BKR'
    var result = metaphone('bigger')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    metaphone('accuracy')
    var expected = 'AKKRS'
    var result = metaphone('accuracy')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    metaphone('batch batcher')
    var expected = 'BXBXR'
    var result = metaphone('batch batcher')
    expect(result).to.deep.equal(expected)
    done()
  })
})