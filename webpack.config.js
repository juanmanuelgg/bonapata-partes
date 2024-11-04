export const resolve = {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
};
export const module = {
    rules: [
        {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /node_modules/,
            resolve: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            },
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-react',
                        '@babel/preset-env',
                        '@babel/preset-flow'
                    ]
                }
            }
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        }
    ]
};
