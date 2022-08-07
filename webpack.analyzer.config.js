/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    ...require('./webpack.config.js'),
    entry: './src/index.ts',
    plugins: [new BundleAnalyzerPlugin()]
};
