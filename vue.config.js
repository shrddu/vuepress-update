module.exports={
    configureWebpack: {
        resolve: {
          alias: {
            '@': resolve('src')
          }
        },
        performance: {
          hints: 'error', 
          maxAssetSize: 300000, // 整数类型（以字节为单位）
          maxEntrypointSize: 500000 // 整数类型（以字节为单位）
        }
      }
}