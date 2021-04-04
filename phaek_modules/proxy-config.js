const proxyConfig = {
  "/user": {
    "target": "https://ci-feature.onelya.ru",
    "changeOrigin": true,
    "secure": false,
    "logLevel": "debug"
  },
  "/api": {
    "target": "https://ci-feature.onelya.ru",
    "changeOrigin": true,
    "secure": false,
    "logLevel": "debug"
  },
  "/isdk": {
    "target": "https://ci-feature.onelya.ru",
    "changeOrigin": true,
    "secure": false,
    "logLevel": "debug"
  },
  "/apib2b": {
    "target": "https://ci-feature.onelya.ru",
    "changeOrigin": true,
    "secure": false,
    "logLevel": "debug"
  },
  "/storage": {
    "target": "https://ci-feature.onelya.ru",
    "changeOrigin": true,
    "secure": false,
    "logLevel": "debug"
  },
  "/scoreboard": {
    "target": "https://ci-feature.onelya.ru",
    "changeOrigin": true,
    "secure": false,
    "logLevel": "debug"
  }
}

module.exports = {
  proxyConfig
};
