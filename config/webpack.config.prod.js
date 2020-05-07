const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.js",

  },
  output: {
    filename: "js/[name].[contenthash:6].js",
    path: path.resolve(__dirname, "../", "build")
  },

  plugins: [

    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "nowa Aplikacja",
      template: "src/templates/template.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash:6].css"
    }),
    new CopyPlugin([{
        from: 'public/images',
        to: 'images'
      },

    ]),

  ],



  module: {
    rules: [{
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
        // use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
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
      {
        test: /\.(png|jpg|svg|jpeg)$/,
        use: [{
            loader: 'file-loader',
            options: {
              name: '[name][contenthash:6].[ext]',
              outputPath: 'images'
            }
          },
          // {
          //   loader: 'image-webpack-loader',
          //   options: {
          //     mozjpeg: {
          //       progressive: true,
          //       quality: 65
          //     }
          //   }
          // },

        ]

      }
    ]
  }

}