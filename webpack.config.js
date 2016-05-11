/**
 * Created by chenghui on 5/9/2016.
 */
var path = require('path');
var webpack = require('webpack');
var copyWebpackPlugin = require('copy-webpack-plugin');

var config = {

    context: path.resolve(__dirname, 'src'),
    entry: './js/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'src')
    },
    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'ng-annotate!babel'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "raw"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: "style!css!sass"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            ON_TEST: process.env.NODE_ENV.trim() === 'test'
        })
    ]
};
if (process.env.NODE_ENV.trim() === 'production') {
    config.output.path = path.resolve(__dirname, 'build');
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.plugins.push(new copyWebpackPlugin([{from: 'index.html'}]));
    config.devtool = 'source-map';
}

module.exports = config;