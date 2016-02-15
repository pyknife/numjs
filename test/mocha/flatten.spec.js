'use strict';

var expect = require('expect.js');
var _ = require('lodash');
var nj = require('../../src');

describe('flatten', function () {
    it('should exist', function () {
        expect(nj.flatten).to.be.ok();
    });
    it('should work on vectors', function () {
        expect(nj.flatten([[0], [1], [2]]).tolist())
            .to.eql([0,1,2]);

        expect(nj.flatten([[0, 1,2]]).tolist())
            .to.eql([0,1,2]);
    });
    it('should work on slided matrix', function () {
        expect(nj.arange(25).reshape(5,5).lo(1,1).hi(2,2).flatten().tolist())
            .to.eql([6,7,11,12]);
    });
});