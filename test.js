'use strict';
var assert = require('assert');
var screenType = require('./');

it('should deteced the screen type as QuadHD', function () {
	assert.strictEqual(screenType.Standard, true);
});
