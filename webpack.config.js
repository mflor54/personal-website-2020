const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                    loader: "html-loader"
                    }
                ]
            }
        ]
    },
    devServer : {
        historyApiFallback : true
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    resolve : {
        modules : [path.resolve(__dirname, './src'), 'node_modules'],

        alias : {
            utils : path.resolve(__dirname, 'src/js/utils'),
            components : path.resolve(__dirname, 'src/js/utils/components'),
            constants : path.resolve(__dirname, 'src/js/constants'),
            core : path.resolve(__dirname, 'src/js/modules/core'),
            about : path.resolve(__dirname, 'src/js/modules/about'),
            contact : path.resolve(__dirname, 'src/js/modules/contact'),
            experience : path.resolve(__dirname, 'src/js/modules/experience'),
            projects : path.resolve(__dirname, 'src/js/modules/projects'),
            skills : path.resolve(__dirname, 'src/js/modules/skills')
        }
    },
    output : {
        path : path.resolve(__dirname, 'build')
    }
};
