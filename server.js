
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    contentBase: "./bin",
    filename: "index.html",
    publicPath: config.output.publicPath,
    historyApiFallback: {
        index: 'index.html'
    }
}).listen(3000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at http://localhost:3000/');
});