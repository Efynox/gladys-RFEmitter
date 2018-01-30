var Promise = require('bluebird');

module.exports = function uninstall() {
	return new Promise(function(resolve, reject) {
		sails.log.info('RPIO: uninstall');
		// async work here
	});
};