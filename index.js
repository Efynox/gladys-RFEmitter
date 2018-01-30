module.exports = function(sails) {

	var install = require('./lib/install.js');
	var uninstall = require('./lib/uninstall.js');
	var exec = require('./lib/exec.js');
	var setup = require('./lib/setup.js');
	var params = { 
		RPIO_DATA: [{  
			PIN: 'integer', 
			MODE: 'string', // Unique, Sequence RF
			VALUE: 'string', 
			LONG_DELAY: 'integer', 
			SHORT_DELAY: 'integer', 
			PAUSE_DELAY: 'integer',
			ATTEMPTS: 'integer'
		}]
	}

	return {
		install,
		uninstall,
		exec,
		setup,
		params
	};
};

