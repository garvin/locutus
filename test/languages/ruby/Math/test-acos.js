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
var acos = require('/Users/kvz/code/phpjs/src/ruby/Math/acos.js')

describe('ruby.Math.acos.js', function () {
  it('should pass example 1', function (done) {
    (acos(0.3) + '').substr(0, 17)
    var expected = "1.266103672779499"
    var result = (acos(0.3) + '').substr(0, 17)
    expect(result).to.deep.equal(expected)
    done()
  })
})