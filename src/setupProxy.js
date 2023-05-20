const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/users', {
      target: 'https://api.kakaobrain.com',
      changeOrigin: true,
    }),
  );
};