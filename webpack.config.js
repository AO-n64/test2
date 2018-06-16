// webpack.config.js
module.exports = {

  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',

  devtool: 'source-map',

  // メインとなるソースファイル
  entry: ['babel-polyfill', './src/index.js'],


  // 出力設定
  // この場合はdist/bundle.jsというファイルが生成される
  output: {
      // 出力先のファイル名
      filename: 'bundle.js',
      // 出力先のファイルパス
      path: `${__dirname}/dist`,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  // 開発サーバの設定
  devServer: {
      // distディレクトリの中身を表示してね、という設定
      contentBase: 'dist',
      // 自動的にlocalhostを開く
      open: true
  },
}
