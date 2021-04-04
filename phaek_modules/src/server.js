const http = require('http');
// const https = require('https');
const fs = require('fs');
const path = require('path');

const Koa = require('koa');
const serve = require('koa-static');
const logger = require('koa-logger');
const proxy = require('koa-proxies');
const { historyApiFallback } = require('koa2-connect-history-api-fallback');

const { proxyConfig } = require('../proxy-config');

const app = new Koa();

// const httpsConfig = {
//   key: fs.readFileSync(path.resolve(process.cwd(), 'certs/key.pem')),
//   cert: fs.readFileSync(path.resolve(process.cwd(), 'certs/cert.pem')),
// };

app
  .use(logger())
  .use(historyApiFallback({ whiteList: ['/api'] }))
  // .use(serve('dist'));
  .use(serve('site'));

Object.entries(proxyConfig).forEach(([path, config]) => {
  app.use(proxy(path, config));
})

http.createServer(app.callback()).listen(3000);
// https.createServer(httpsConfig, app.callback()).listen(3000);
