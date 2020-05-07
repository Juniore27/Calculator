const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');



module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",

  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "../", "build")
  },
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, "../", "public")
  },
  plugins: [

    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "nowa Aplikacja",
      template: "src/templates/template.html"
    }),


  ],



  module: {
    rules: [{
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: ["style-loader", 'css-loader']

      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|svg|jpeg)$/,
        loader: 'file-loader',
        options: {
          name: '[name][contenthash:6].[ext]',
          outputPath: 'images'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {

          presets: [
            ["@babel/preset-env", {
              useBuiltIns: "usage",
              corejs: "2.0.0"
            }]
          ],
          plugins: ["@babel/plugin-proposal-class-properties"]

        }
      },
    ]
  }

}