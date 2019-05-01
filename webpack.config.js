const webpack = require('webpack');
const isProduction = (process.env.NODE_ENV === 'production');

const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path : path.resolve(__dirname, 'dist/'),
        filename: "app.js"
    },

    module:  {
        rules: [
            { // js
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },

    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
    ],

    optimization: {

    }
}
