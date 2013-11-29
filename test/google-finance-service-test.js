var assert = require('assert');
var $ = require('jquery');
var service = require('../lib/google-finance-service.js');

describe('Google Finance Service', function () {

    it('fetches for comma separated list of symbols', function (done) {
        $.when(
            service('LON:TSCO,NASDAQ:GOOG')
        ).then(
            function (data) {
                console.info('success', data);
                assert.equal(2, data.length);
                assert.equal('Tesco PLC', data[0].name);
                assert.equal('TSCO', data[0].t);
                assert.equal('Google Inc', data[1].name);
                assert.equal('GOOG', data[1].t);
                done();
            }
        );
    });


    it('fetches for array of symbols', function (done) {
        $.when(
            service(['LON:TSCO', 'NASDAQ:GOOG'])
        ).then(
            function (data) {
                console.info('success', data);
                assert.equal(2, data.length);
                assert.equal('Tesco PLC', data[0].name);
                assert.equal('TSCO', data[0].t);
                assert.equal('Google Inc', data[1].name);
                assert.equal('GOOG', data[1].t);
                done();
            }
        );
    });


});