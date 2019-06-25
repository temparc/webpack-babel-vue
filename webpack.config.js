const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // for sass compilation into a production file
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    watch: true, // watch files for changes
    watchOptions: {
        aggregateTimeout: 300, // time delay for rebuild on watch (ms)
        poll: 1000, // check for changes every second
        ignored: ['dist', 'node_modules'] // exclude files from watch
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "./"
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    // fallback to style-loader in development
                    // process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    MiniCssExtractPlugin.loader, // compile scss into a css file in the default public path
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                // vue component templates
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                // fonts
                test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,
                use: [
                    {
                        loader: "file-loader?name=/fonts/[name].[ext]", // set the directory you want the bundled files output to
                    },
                ],
            },
            {
                // images
                test: /\.(svg|png|jpeg|jpg)([\?]?.*)$/,
                use: [
                    {
                        loader: "file-loader?name=/images/[name].[ext]", // set the directory you want the bundled files output to
                    },
                ],
            },

        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new VueLoaderPlugin()
    ]
};