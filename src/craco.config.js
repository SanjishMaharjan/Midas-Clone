// craco.config.js
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // You can also directly modify the variables here instead of importing a less file
              // '@primary-color': '#1890ff',
            },
            javascriptEnabled: true,
          },
        },
        modifyLessRule: function(lessRule, context) {
          lessRule.test = /\.(module)\.(less)$/;
          lessRule.exclude = /node_modules/;
          return lessRule;
        },
      },
    },
  ],
};
