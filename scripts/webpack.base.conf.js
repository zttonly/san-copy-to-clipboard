/**
 * @file config base
 * @author zttonly
 */

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? '#cheap-module-eval-source-map' : false,
    resolve: {
        extensions: ['.js', '.san', '.less'],
        alias: {
            san: isProduction ? 'san/dist/san.spa.min.js' : 'san/dist/san.spa.dev.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.san$/,
                use: 'san-loader'
            },
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
            }
        ]
    }
};
