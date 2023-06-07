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
  // 模块 loader 配置使用
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

      // {
      //   test: /\.(png|jpe?g)$/,
      //   use: {
      //     loader: "file-loader", // 打包资源
      //     options: {
      //       // 打包后输入文件输出地址
      //       // outputPath: "img"

      //       // 打包后文件名占位符, [name]: 打包前文件名, [hash:4] 取4位hash值, [ext]: 打包前文件后缀名
      //       name: "img/[name]_[hash:4].[ext]"
      //     }
      //   }
      // },

      // {
      //   test: /\.(png|jpe?g)$/,
      //   use: {
      //     // url-loader: 小图片直接转化成 Base64 URL 格式的图片进行展示, 减少服务器请求, 提高性能
      //     loader: "url-loader",
      //     options: {
      //       // 打包后输入文件输出地址
      //       // outputPath: "img"

      //       // 打包后文件名占位符, [name]: 打包前文件名, [hash:4] 取4位hash值, [ext]: 打包前文件后缀名
      //       name: "img/[name]_[hash:4].[ext]",
      //       limit: 100 * 1024
      //     }
      //   }
      // }

      // webpack5 打包静态资源
      // {
      //   test: /\.(png|jpe?g)$/,
      //   type: "asset",
      //   generator: {
      //     filename: "img/[name]_[hash:6][ext]"
      //   },
      //   parser: {
      //     dataUrlCondition: {
      //       maxSize: 100 * 1024
      //     }
      //   }
      //

      //FIXME: 字体图标打包
      // 1. 使用 file-loader
      // 2. 使用 asset/resource
    ]
  }
}
