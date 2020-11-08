const path = require('path')

module.exports = {
  alias: {
    // 键必须以斜线开始和结束
    '/@/': path.resolve(__dirname, './src')
  },
  cssPreprocessOptions: {
    scss: {
      prependData: `import "~/@/style/variables.scss";`,
      modifyVars:{}
    }
  }

}