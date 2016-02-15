'use strict';

var expect = require('expect.js');
var _ = require('lodash');
var nj = require('../../src');

describe('clip', function () {
    it('should exist', function () {
        expect(nj.clip).to.be.ok();
    });
    it('should work on vectors', function () {
        var x = nj.array([-1,0,1]);
        expect(nj.clip(x, 0, Number.POSITIVE_INFINITY).tolist())
            .to.eql([0,0,1]);
        expect(nj.clip(x, Number.NEGATIVE_INFINITY, 0).tolist())
            .to.eql([-1,0,0]);
    });
});