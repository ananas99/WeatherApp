var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './client/index.js',
    output : {
        path : path.resolve(__dirname , 'public'),
        filename: 'index_bundle.js'
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader', exclude: /node_modules/}
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : './client/index.html'
        })
    ]

}