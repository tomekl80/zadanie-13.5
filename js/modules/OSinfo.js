'use scrict';

// Node.js - Common JS Modules
var os = require('os');
var colors = require('colors');
var uptime = require('./Uptime');

function getOSinfo() {
	var type = os.type();
	if (type === 'Darwin') {
		type = 'OSX';
	} else if (type === 'Windows_NT'); {
		type = 'Windows';
	}
	var release = os.release();
	var cpu = os.cpus()[0].model;
	// var uptime = os.uptime();
	var userInfo = os.userInfo();
	console.log(('System:'.grey), type);
	console.log(('Release:'.red), release);
	console.log(('CPU Model:'.blue), cpu);
	uptime.uptimeSystem();
	console.log(('User name:'.yellow), userInfo.username);
	console.log(('Home dir:'.gray), userInfo.homedir);
};

exports.print = getOSinfo;