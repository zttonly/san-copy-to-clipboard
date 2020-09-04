/**
 * @file config min
 * @author zttonly
 */

const merge = require('webpack-merge');
const webpackConfig = require('./config');
const baseWebpackConfig = require('./webpack.base.conf');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const path = require('path');
const {name, config} = require(path.resolve(__dirname, '../package.json'));

module.exports = merge(baseWebpackConfig, {
    entry: {
        app: webpackConfig.dist.entry
    },
    output: {
        path: webpackConfig.build.assetsRoot,
        filename: `${name}.min.js`,
        library: config.component,
        libraryTarget: 'umd'
    },
    optimization: {
        minimizer: [
            new ParallelUglifyPlugin({
                cacheDir: '.cache/',
                test: /.js$/,
                uglifyJS: {
                    output: {
                        beautify: false,
                        comments: false
                    },
                    compress: {
                        drop_console: true,
                        collapse_vars: true,
                        reduce_vars: true
                    }
                }
            })
        ]
    }
});

