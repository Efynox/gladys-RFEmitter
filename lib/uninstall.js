var Promise = require('bluebird');

module.exports = function uninstall() {
	return new Promise(function(resolve, reject) {
		// async work here
		console.log('gladys-RFEmitter uninstalled');
	});
};