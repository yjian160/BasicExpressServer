const path = require('path');

module.exports = {
    entry: './client/app.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'server/public')
    },
    module: {
        rules: [
            {
                test: /\.jsx/,
                include: [path.resolve(__dirname, 'client')],
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    }
}