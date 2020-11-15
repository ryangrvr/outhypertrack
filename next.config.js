const { parsed: localEnv } = require("dotenv").config();

module.exports = {
  env: {
    HT_PUBLISHABLE_KEY: process.env.HT_PUBLISHABLE_KEY
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config

    // Setup dotenv
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    return config;
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  }
};
