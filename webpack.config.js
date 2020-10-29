const path = require('path');

// Entry -> Output

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },

    // loader
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    
    devtool: 'eval-cheap-module-source-map',// Mapping the files to show in the console log instead of just bundle.js

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true // Returns this same page for all 404 routes
    }
};
