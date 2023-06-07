/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-06-06 17:41
 * @LastAuthor : wangchao
 * @LastTime   : 2023-06-06 20:52
 * @desc       :
 */

const path = require("path")

module.exports = {
  // 入口
  entry: "./src/index.js",
  // 出口
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "build.js"
  },
  // 模块
  module: {
    rules: [
      {
        test: /\.css$/,

        // 写法一
        // loader: 'css-loader',

        // 写法二
        //FIXME: loader 执行顺序 从下往上，从左往右
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader"

          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [require('autoprefixer')], // autoprefixer，自动添加浏览器前缀
          //     },
          //   },
          // },
        ]
        // css-loader，解析 css 文件
        // style-loader，将 style 插入页面

        // 写法三
        // use: [
        //   {
        //     loader: 'css-loader',
        //   },
        // ],
      },

      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
        // less-loader，将 less 解析成普通 css
      }

      // {
      //   test: /\.(less|css)$/,
      //   use: ['style-loader', 'css-loader', 'less-loader'],
      //   // less-loader，将 less 解析成普通 css
      // },
    ]
  }
}
