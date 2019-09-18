module.exports = {
  productioSourceMap: false,
  devServer: {
    proxy: {
      '^apis': {
        traget: 'http//localhost:8090',
        changeOrigin: true
      }
    }
  }
}
