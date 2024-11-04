import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export default {
    // eslint-disable-next-line no-undef
    ...require('./webpack.config.js'),
    entry: './src/index.ts',
    plugins: [new BundleAnalyzerPlugin()]
};
