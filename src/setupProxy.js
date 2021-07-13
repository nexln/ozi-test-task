const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(createProxyMiddleware('/api',
        {
            target: 'https://tager.dev.ozitag.com',
            changeOrigin: true
        }
    ));
}
