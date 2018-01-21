var Promise = require('bluebird');
var exec = require('./emit.js');

module.exports = function exec() {
	return new Promise(function(resolve, reject) {
		// async work here
		emit().then(() => {
			resolve();
		}).catch(() => {
			resolve();
		});
		console.log('gladys-RFEmitter exec');
	});
};