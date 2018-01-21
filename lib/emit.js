var Promise = require('bluebird');
var rpio = require('rpio');

var GPIO_PIN = 12;
var SHORT_DELAY = 0.5;
var LONG_DELAY = 1;
var PAUSE_DELAY = 7;
var ATTEMPTS = 10;

var test = '011111011000111110110101111111111';

module.exports = function emit() {
	return new Promise(function(resolve, reject) {
		// async work here
		if(GPIO_PIN == null) {
			reject(new Error('Parameter GPIO_PIN not fixed'));
		}
		else if(SHORT_DELAY == null) {
			reject(new Error('Parameter SHORT_DELAY not fixed'));
		}
		else if(LONG_DELAY == null) {
			reject(new Error('Parameter LONG_DELAY not fixed'));
		}
		else if(PAUSE_DELAY == null) {
			reject(new Error('Parameter PAUSE_DELAY not fixed'));
		}
		else if(ATTEMPTS == null) {
			reject(new Error('Parameter ATTEMPTS not fixed'));
		}
		
		
		rpio.open(12, rpio.OUTPUT, rpio.LOW);
		for (let attemp = 0; attemp < ATTEMPTS; attemp++) {
				
			for (let index = 0; index < test.length; index++) {
				const element = test[index];
				switch (key) {
					case '0':
						rpio.write(GPIO_PIN, rpio.HIGH);
						rpio.msleep(LONG_DELAY);
						rpio.write(GPIO_PIN, rpio.LOW);
						break;

					case '1':
						rpio.write(GPIO_PIN, rpio.HIGH);
						rpio.msleep(SHORT_DELAY);
						rpio.write(GPIO_PIN, rpio.LOW);
						break;
				
					default:
						break;
				}	
			}
			// Pause before next try
			rpio.write(GPIO_PIN, rpio.HIGH);
			rpio.msleep(PAUSE_DELAY);
			rpio.write(GPIO_PIN, rpio.LOW);
		}
		
		resolve();
		
		// if something fails, reject(new Error('bad bad'));
	});
};

