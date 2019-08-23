const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const ExtWebpackPlugin = require('@sencha/ext-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const portfinder = require('portfinder');

module.exports = function(env) {
    function get(it, val) {
        if(env == undefined) {
            return val;
        } else if(env[it] == undefined) {
            return val;
        } else {
            return env[it];
        }
    }

    var profile=get('profile', '');
    var emit=get('emit', 'yes');
    var environment= get('environment', 'development');
    var treeshake= get('treeshake', 'no');
    var browser= get('browser', 'yes');
    var watch= get('watch', 'yes');
    var verbose= get('verbose', 'no');
    var basehref= get('basehref', '/');
    var build_v= get('build_v', '7.0.0.0');

    const isProd = environment === 'production';
    const outputFolder = 'build';
    portfinder.basePort = (env && env.port) || 1962;

    return portfinder.getPortPromise().then(port => {
        const plugins = [
            new HtmlWebpackPlugin({template: 'index.html', hash: true, inject: 'body'}),
            new BaseHrefWebpackPlugin({ baseHref: basehref }),
            new ExtWebpackPlugin({
                framework: 'web-components',
                toolkit: 'modern',
                theme: 'theme-kitchensink',
                emit: emit,
                script: './extract-code.js',
                port: port,
                packages: [
                    'renderercell',
                    'font-ext',
                    'ux',
                    'd3',
                    'pivot-d3',
                    'font-awesome',
                    'exporter',
                    'pivot',
                    'calendar',
                    'charts',
                    'treegrid',
                    'froala-editor'
                ],
                profile: profile,
                environment: environment,
                treeshake: treeshake,
                browser: browser,
                watch: watch,
                verbose: verbose
            }),
            new CopyWebpackPlugin([{
                from: '../node_modules/@sencha/ext-ux/modern/resources',
                to: './ext/ux'
            }]),
            new CopyWebpackPlugin([{
                from: '../node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js',
                to: './webcomponents-bundle.js'
            }]),
            // Debug purposes only, injected via script: npm run-script buildexample -- --env.build_v=<full version here in format maj.min.patch.build>
            new webpack.DefinePlugin({
                BUILD_VERSION: JSON.stringify(build_v)
            })
        ];
        return {
            mode: environment,
            devtool: (environment === 'development') ? 'inline-source-map' : false,
            context: path.join(__dirname, './src'),
            entry: './index.js',
            output: {
                path: path.join(__dirname, outputFolder),
                filename: '[name].js'
                //filename: "[name].[chunkhash:20].js"
            },
            plugins: plugins,
            module: {
                rules: [
                    { test: /\.(js)$/, exclude: /node_modules/,
                        use: [
                            'babel-loader',
                            //'eslint-loader'
                        ]
                    },
                    { test: /\.(html)$/, use: { loader: 'html-loader' } },
                    {
                        test: /\.(css|scss)$/,
                        use: [
                            { loader: 'style-loader' },
                            { loader: 'css-loader' },
                            { loader: 'sass-loader' }
                        ]
                    }
                ]
            },
            performance: { hints: false },
            stats: 'none',
            optimization: { noEmitOnErrors: true },
            node: false,
            devServer: {
                contentBase: outputFolder,
                hot: !isProd,
                historyApiFallback: true,
                host: '0.0.0.0',
                port: port,
                disableHostCheck: false,
                compress: isProd,
                inline:!isProd,
                stats: 'none'
            }
        };
    });
};
