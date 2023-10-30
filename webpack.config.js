const  HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');


module.exports = {
    entry: path.join(__dirname, 'src', 'index.ts'),

    devtool: 'inline-source-map',

    output: {
        path: path.join(__dirname, 'dist'),
        filename:  'index.[contenthash:8].js',
        // assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(woff2?|eot|ttf|otf})$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    // 'style-loader', 
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: 'last 2 versions',
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    'sass-loader'
                ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,  
                type: 'asset/resource',
                generator: {
                    // filename: path.join('images', '[name].[contenthash][ext]'),
                    filename: 'images/[name][contenthash:8][ext]',
                    // filename: 'images/[name][ext]',
                },
            },
            {
                test: /\.svg$/,
                use: 'svgo-loader',
                type: 'asset/resource',
                generator: {
                    //   filename: path.join('icons', '[name].[contenthash:8][ext]'),
                    filename: 'icons/[contenthash:8][ext]',
                },
            },
           
        ],
    },

   
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'template.html'),
            filename: 'index.html',
        }),
        new FileManagerPlugin({
            events: {
                onStart: {
                    delete: ['dist'],
                },
            },
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
    ],

    devServer: {
        watchFiles: path.join(__dirname, 'src'),
        port: 9000,
    },

    optimization: {
        minimizer: [
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ['gifsicle', { interlaced: true }],
                            ['jpegtran', { progressive: true }],
                            ['optipng', { optimizationLevel: 5 }],
                            ['svgo', { name: 'preset-default' }],
                        ],
                    },
                },
            }),
        ],
    },
        
}
