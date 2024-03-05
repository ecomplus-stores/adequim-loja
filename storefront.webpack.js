const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './js/TheProduct.js': path.resolve(__dirname, 'template/js/custom-js/js/TheProduct.js'),
      './html/TheProduct.html': path.resolve(__dirname, 'template/js/custom-js/html/TheProduct.html')
    }
  }
})
