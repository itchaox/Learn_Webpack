/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-06-06 20:42
 * @LastAuthor : wangchao
 * @LastTime   : 2023-06-06 20:50
 * @desc       :
 * FIXME: postcss 作用：进行一些 CSS 转换和适配（配合 PostCSS 对应插件实现）
 * 1. 自动添加浏览器前缀
 * 2. CSS 样式重置 等
 */

module.exports = {
  // plugins: [require('autoprefixer')],
  plugins: [require("postcss-preset-env")]
}
