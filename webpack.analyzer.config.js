import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export default {
    ...require('./webpack.config.js'),
    entry: './src/index.ts',
    plugins: [new BundleAnalyzerPlugin()]
};
