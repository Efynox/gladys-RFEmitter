var Promise = require('bluebird');
var emit = require('./emit.js');

module.exports = function exec() {
	return new Promise(function(resolve, reject) {
		sails.log.info('RPIO: exec');
		// async work here
		emit().then(() => {
			resolve();
		}).catch((err) => {
			reject(err);
		});
	});
};
