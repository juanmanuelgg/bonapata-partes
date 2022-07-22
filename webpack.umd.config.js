// eslint-disable-next-line no-undef
module.exports = {
    entry: './dist/esm/index.js',
    output: {
        library: 'partes',
        libraryTarget: 'umd',
        filename: 'umd/partes.js',
        auxiliaryComment: 'Test Comment'
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
    }
};
