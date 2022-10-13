module.exports={
    configureWebpack: {
        resolve: {
          alias: {
            '@': resolve('src')
          }
        },
        performance: {
          hints: 'error', 
          maxAssetSize: 300000, // �������ͣ����ֽ�Ϊ��λ��
          maxEntrypointSize: 500000 // �������ͣ����ֽ�Ϊ��λ��
        }
      }
}