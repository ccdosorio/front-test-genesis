const PROXY_CONFIG = [
    {
        context: [
            '/client',
            '/loan'
        ],
        target: 'http://localhost:6100/api/genesis/v1/',
        secure: false,
        changeOrigin: true,
        logLevel: 'debug'
    }
]

module.exports = PROXY_CONFIG;
