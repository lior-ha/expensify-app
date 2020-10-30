const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Entry -> Output

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new MiniCssExtractPlugin();

    return ({
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        plugins: [
            CSSExtract          
        ],

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
                    use: [MiniCssExtractPlugin.loader, {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'sass-loader',
                        
                    }],
                },
            ]
        },
        
        devtool: isProduction ? 'source-map' : 'inline-source-map',// Mapping the files to show in the console log instead of just bundle.js

        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true, // Returns this same page for all 404 routes
            publicPath: '/dist/'
        }
    })
};
