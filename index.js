module.exports = function(sails) {

	var install = require('./lib/install.js');
	var uninstall = require('./lib/uninstall.js');
	var exec = require('./lib/exec.js');
	var setup = require('./lib/setup.js');

	return {
		install,
		uninstall,
		exec,
		setup
	};
};

