var Browser = require('zombie'),
assert = require('chai').assert;

var browser;

Browser.localhost('localhost', '3000');

describe('cross page test', () => {
    browser = new Browser();
    describe('from hood-river to request', () => {
        before(() => browser.visit('/tours/hood-river'));

        before(() => browser.clickLink('.requestGroupRate'));

        it('should have test input', (done) => {
            browser.assert.element('form input#test');
            done();
        });

        it('should from "hood-river"', (done) => {
            // console.log(browser);
            // browser.assert.input('form input#test', 'http://localhost:3000/tours/hood-river');
            assert.equal(browser.resources[0].request.headers._headers[0][1], 'http://localhost/tours/hood-river');
            done();
        });
    });


});
