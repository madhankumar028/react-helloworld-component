var webpackConfig = {
    entry: "./src/component.js",
    output: {
        path: __dirname + "/build",
        filename: "component.js"
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                test: /.js$/,
                exclude: /node_modules/
            }
        ]        
    }
};

module.exports = webpackConfig;