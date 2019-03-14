const path = require('path');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        MyComponent: "./src/components/MyComponent",
    },
    output: {
        path: path.resolve(__dirname, 'build/static/js'),
        filename: "[name].bundle.js",
        libraryTarget: "umd",
        library: "[name]",
        umdNamedDefine: true,
        globalObject: 'this'
    },
    externals: {
        "react": {
            commonjs: "react",
            commonjs2: "react",
            amd: "react",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "react-dom",
            root: "ReactDOM"
        }
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new UnminifiedWebpackPlugin()
    ]
};