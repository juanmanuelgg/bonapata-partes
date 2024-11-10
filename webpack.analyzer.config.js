const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    ...require('./webpack.config.js'),
    entry: './src/index.ts',
    plugins: [new BundleAnalyzerPlugin()]
};
