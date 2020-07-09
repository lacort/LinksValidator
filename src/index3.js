const isReachable = require('is-reachable');

(async () => {
	// console.log('1 ' + await isReachable('sindresorhus.com'));
	// //=> true

    console.log('PPA ' + await isReachable('http://ppa.launchpad.net:443'));
	//=> true

	console.log('PortUbuntu ' + await isReachable('http://ports.ubuntu.com:80'));
    //=> true
    
    console.log('WsDisplay ' + await isReachable('https://ws-display.nextqs.io:80'));
	//=> true

	console.log('NextQsHttp ' + await isReachable('http://nextqs.com:443'));
    //=> true
    
    console.log('NextQsHttps ' + await isReachable('https://nextqs.com:80'));
	//=> true

	console.log('YouTubeHttp ' + await isReachable('http://youtube.com:80'));
    //=> true
    
    console.log('YouTubeHttps ' + await isReachable('https://youtube.com:80'));
	//=> true

	console.log('SshGit ' + await isReachable('ssh://git@ssh.github.com:22'));
    //=> true
    
    console.log('NextDisplayGit ' + await isReachable('https://github.com/nextqs/next.display.git:80'));
	//=> true

	console.log('DigitalOcean ' + await isReachable('https://nextqs.nyc3.digitaloceanspaces.com:80'));
    //=> true

    console.log('Pyp ' + await isReachable('https://pypi.python.org'));
	//=> true

	console.log('WssDsiplay ' + await isReachable('wss://ws-display.nextqs.io:80'));
    //=> true
    

	console.log('ManagerHttp ' + await isReachable('http://manager.nextqs.com/'));
    //=> true
    
    console.log('ManagerHttps ' + await isReachable('https://manager.nextqs.com/'));
	//=> true

	console.log('CdnHttp ' + await isReachable('http://cdn.nextqs.io'));
    //=> true
    
    console.log('CdnHttps ' + await isReachable('https://cdn.nextqs.io'));
	//=> true

	// console.log('NtpUbuntu ' + await isReachable('ntp.ubuntu.com:123'));
    // //=> true
    
    
    
})();