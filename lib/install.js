var Promise = require('bluebird');

module.exports = function install() {
	return new Promise(function(resolve, reject) {
		console.log('gladys-RFEmitter installed');
	});
};
