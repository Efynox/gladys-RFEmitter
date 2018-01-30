var Promise = require('bluebird');
var emit = require('./emit.js');

module.exports = function setup() {
	return new Promise(function(resolve, reject) {
		sails.log.info('RPIO: setup');
	});
};
