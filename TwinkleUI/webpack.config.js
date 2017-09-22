const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

const bundleOutputDir = './wwwroot/dist';
module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    return [{
        stats: { modules: false },
        entry: { 'main': './ClientApp/Index.tsx' },
        resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        output: {
            path: path.join(__dirname, bundleOutputDir),
            filename: '[name].js',
            publicPath: 'dist/'
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    include: /ClientApp/,
                    use: [
                        {
                            loader: 'awesome-typescript-loader'
                        }
                    ]
                },
                { test: /\.css$/, use: isDevBuild ? ['style-loader', 'css-loader'] : ExtractTextPlugin.extract({ use: 'css-loader?minimize' }) },
                { test: /\.less$/, use: isDevBuild ? ['style-loader', 'css-loader', 'less-loader'] : ExtractTextPlugin.extract({ fallback: "style-loader", use: ["css-loader", "less-loader"] }) },
                { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' }
            ]
        },
        plugins: [
            new CheckerPlugin(),
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./wwwroot/dist/vendor-manifest.json')
            })
        ].concat(isDevBuild ? [
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
            })
        ] : [
                //  new webpack.optimize.UglifyJsPlugin(),
                new ExtractTextPlugin('site.css')
            ])
    }];
};