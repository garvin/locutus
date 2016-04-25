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
var i18n_loc_get_default = require('/Users/kvz/code/phpjs/src/php/i18n/i18n_loc_get_default.js')

describe('php.i18n.i18n_loc_get_default.js', function () {
  it.skip('should pass example 1', function (done) {
    i18n_loc_set_default('pt_PT')
    i18n_loc_get_default()
    var expected = 'pt_PT'
i18n_loc_set_default('pt_PT')
    var result = i18n_loc_get_default()
    expect(result).to.deep.equal(expected)
    done()
  })
})