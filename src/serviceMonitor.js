const isReachable = require('is-reachable');
const {
    resolve
} = require('url');

class ServiceMonitor {
    constructor(services) {
        this.services = services
    }
    async monitor() {
        let status = {
            url: {},
            //alias: {}
        }
        for (let service of this.services) {
            let isAlive = await this.ping2(service)
            status.url[`${service.address}:${service.port}`] = isAlive
            //status.alias[service.service] = isAlive
            console.log(service.address+':'+service.port +' '+ isAlive)
        }
        return status
    }
    async ping2(connection) {

        const isReachable = require('is-reachable');
        let result = await isReachable(connection.address+':'+connection.port)
        return result
    }
}

(async function test() {
    let services = [

            {
                service: "PPA",
                address: "http://ppa.launchpad.net",
                port: 80,
                timeout: 1000,
                attempts: 1
            },
            {
                service: "PortUbuntu",
                address: "http://ports.ubuntu.com",
                port: 80,
                timeout: 1000,
                attempts: 1
            },
            {
                service: "WsDisplay",
                address: "http://nextqs.com",
                port: 443,
                timeout: 1000,
                attempts: 1
            }, {
                service: "NextQsHttps",
                address: "https://nextqs.com",
                port: 80,
                timeout: 1000,
                attempts: 1
            },
            {
                service: "YouTubeHttp",
                address: "http://youtube.com",
                port: 80,
                timeout: 1000,
                attempts: 1
            },
            {
                service: "YouTubeHttps",
                address: "https://youtube.com",
                port: 80,
                timeout: 1000,
                attempts: 1
            },
            {
                service: "SshGit",
                address: "ssh://git@ssh.github.com",
                port: 22,
                timeout: 1000,
                attempts: 1
            }, {
                service: "NextDisplayGit",
                address: "https://github.com/nextqs/next.display.git",
                port: 8081,
                timeout: 1000,
                attempts: 1
            }, {
                service: "DigitalOcean",
                address: "https://nextqs.nyc3.digitaloceanspaces.com",
                port: 80,
                timeout: 1000,
                attempts: 1
            },
            {
                service: "Pyp",
                address: "https://pypi.python.org",
                port: 80,
                timeout: 1000,
                attempts: 1
            },
            {
                service: "WssDisplay",
                address: "wss://ws-display.nextqs.io",
                port: 80,
                timeout: 1000,
                attempts: 1
            },
            {
                service: "Manager",
                address: "http://manager.nextqs.com",
                port: 80,
                timeout: 1000,
                attempts: 1
            }, {
                service: "CdnHttp",
                address: "http://cdn.nextqs.io",
                port: 80,
                timeout: 1000,
                attempts: 1
            },
            {
                service: "CdnHttps",
                address: "https://cdn.nextqs.io",
                port: 80,
                timeout: 1000,
                attempts: 1
            },

            {
                service: "NtpUbintu",
                address: "ntp.ubuntu.com",
                port: 80,
                timeout: 1000,
                attempts: 1
            },

        ],

        status = await new ServiceMonitor(services).monitor()
    console.log(status)
}())