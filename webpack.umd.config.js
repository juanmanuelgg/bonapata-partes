const path = require('path');

module.exports = {
    entry: './dist/esm/index.js',
    output: {
        library: 'partes',
        libraryTarget: 'umd',
        filename: 'umd/partes.js',
        auxiliaryComment:
            'Una librería libre de componentes para React, escrita en Typescript.'
    },
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React'
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM'
        }
    },
    resolve: {
        alias: {
            './Dock.css': path.resolve(
                __dirname,
                'src/components/Dock/Dock.css'
            )
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
