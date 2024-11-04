import { defineConfig } from 'cypress';
import webpackPreprocessor from '@cypress/webpack-preprocessor';

const options = { webpackOptions: require('./webpack.config.js') };

const config = defineConfig({
    projectId: '4dcvkq',
    component: {
        devServer: {
            framework: 'react',
            bundler: 'webpack'
        }
    },
    e2e: {
        setupNodeEvents(on) {
            on('file:preprocessor', webpackPreprocessor(options));
        }
    }
});

export default config;
