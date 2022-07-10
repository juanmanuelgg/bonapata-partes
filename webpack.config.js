module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx']
                },
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
