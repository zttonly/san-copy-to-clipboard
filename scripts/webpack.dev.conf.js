/**
 * @file config dev
 * @author zttonly
 */

const merge = require('webpack-merge');
const config = require('./config');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
    entry: {
        app: config.dev.entry
    },
    output: {
        path: config.dev.assetsRoot,
        publicPath: config.dev.assetsPublicPath,
        filename: 'bundle.js'
    },
    devServer: {
        // contentBase: config.dev.assetsRoot,
        port: config.dev.port
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './example/index.html',
            inject: true
        })
    ]
});
