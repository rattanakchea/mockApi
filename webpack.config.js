var webpack = require('webpack');
module.exports = {
    entry: "./src/app.js",
    output: {
        path: './build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/,
            loader: 'babel-loader',
            query: {presets: ['es2015']},
            exclude: '/node_modules/'
            }
        ]
    },
    debug: true
};