var Promise = require('bluebird');
var emit = require('./emit.js');

module.exports = function setup() {
	return new Promise(function(resolve, reject) {
		console.log('gladys-RFEmitter setup');
	});
};
