var Promise = require('bluebird');

module.exports = function setup() {
	return new Promise(function(resolve, reject) {
		console.log('gladys-RFEmitter setup');
	});
};
