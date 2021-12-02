process.env.UNI_USING_VUE3 = true
process.env.UNI_USING_VUE3_OPTIONS_API = true

const path = require('path')

const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
  lintOnSave: false,

  // 路径别名
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  }
}
