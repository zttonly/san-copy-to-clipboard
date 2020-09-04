/**
 * @file config
 * @author zttonly
 */

const path = require('path');

module.exports = {
    build: {
        entry: path.resolve(__dirname, '../src/index.js'),
        assetsRoot: path.resolve(__dirname, '../build'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/'
    },
    dev: {
        entry: path.resolve(__dirname, '../example/index.js'),
        assetsRoot: path.resolve(__dirname, '../dev'),
        port: 8822,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/'
    },
    dist: {
        entry: path.resolve(__dirname, '../src/index.js'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: './'
    }
};
