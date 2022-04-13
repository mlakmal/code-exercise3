const PROXY_CONFIG = {
  '/proxy/itunes': {
    target: 'https://itunes.apple.com',
    changeOrigin: true,
    pathRewrite: {
      '^/proxy/itunes': '',
    },
  },
};

module.exports = PROXY_CONFIG;
