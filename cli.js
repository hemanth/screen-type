#!/usr/bin/env node
'use strict';
var meow = require('meow');
var screenType = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ screen-type [input]',
		'',
		'Options',
		'  --foo  Lorem ipsum. [Default: false]',
		'',
		'Examples',
		'  $ screen-type',
		'  unicorns & rainbows',
		'  $ screen-type ponies',
		'  ponies & rainbows'
	]
});

console.log(screenType(cli.input[0] || 'unicorns'));
