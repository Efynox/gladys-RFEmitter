var Promise = require('bluebird');

module.exports = function setup() {
	return new Promise(function(resolve, reject) {
		sails.log.info('RPIO: setup');
	});
};
