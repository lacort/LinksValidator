var net = require('net');
var hosts = [['google.com', 80], ['stackoverflow.com', 80], ['google.com', 444]];
let listHosts = [['http://ppa.launchpad.net',123],[' http://ports.ubuntu.com'], ['wss//ws-display.nextqs.io',443],
['http://nextqs.com'], ['https://nextqs.com'], ['http://youtube.com'], ['https://youtube.com'],
['ssh://git@ssh.github.com'], ['https://github.com/nextqs/next.display.git'], ['https://nextqs.nyc3.digitaloceanspaces.com'],
['https://pypi.python.org'], ['wss://ws-display.nextqs.io'], ['http://manager.nextqs.com/'], ['https://manager.nextqs.com/'],
['http://cdn.nextqs.io'], ['https://cdn.nextqs.io'], ['ntp.ubuntu.com']]

listHosts.forEach(function(item) {
    var sock = new net.Socket();
    sock.setTimeout(2500);
    sock.on('connect', function() {
        console.log(item[0]+':'+item[1]+' is up.');
        sock.destroy();
    }).on('error', function(e) {
        console.log(item[0]+':'+item[1]+' is down: ' + e.message);
    }).on('timeout', function(e) {
        console.log(item[0]+':'+item[1]+' is down: timeout');
    }).connect(item[1], item[0]);
});

// listHosts = ['http://ppa.launchpad.net',' http://ports.ubuntu.com', 'https://ws-display.nextqs.io',
//     'http://nextqs.com', 'https://nextqs.com', 'http://youtube.com', 'https://youtube.com',
//     'ssh://git@ssh.github.com', 'https://github.com/nextqs/next.display.git', 'https://nextqs.nyc3.digitaloceanspaces.com',
//     'https://pypi.python.org', 'wss://ws-display.nextqs.io', 'http://manager.nextqs.com/', 'https://manager.nextqs.com/',
//     'http://cdn.nextqs.io', 'https://cdn.nextqs.io', 'ntp.ubuntu.com']