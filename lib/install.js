var Promise = require('bluebird');

module.exports = function install() {
	return new Promise(function(resolve, reject) {
		sails.log.info('RPIO: install');
	});
};
