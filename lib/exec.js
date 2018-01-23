var Promise = require('bluebird');
var emit = require('./emit.js');

module.exports = function exec() {
	return new Promise(function(resolve, reject) {
		// async work here
		emit().then(() => {
			resolve();
		}).catch((err) => {
			reject(err);
		});
		console.log('gladys-RFEmitter exec');
	});
};
