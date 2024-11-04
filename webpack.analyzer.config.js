// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// eslint-disable-next-line no-undef
module.exports = {
    // eslint-disable-next-line no-undef
    ...require('./webpack.config.js'),
    entry: './src/index.ts',
    plugins: [new BundleAnalyzerPlugin()]
};
