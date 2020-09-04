/**
 * @file config dist
 * @author zttonly
 */
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const merge = require('webpack-merge');
const webpackConfig = require('./config');
const baseWebpackConfig = require('./webpack.base.conf');
const path = require('path');
const {name, config} = require(path.resolve(__dirname, '../package.json'));

module.exports = merge(baseWebpackConfig, {
    entry: {
        app: webpackConfig.dist.entry
    },
    output: {
        path: webpackConfig.build.assetsRoot,
        filename: `${name}.js`,
        library: config.component,
        libraryTarget: 'umd'
    }
});

