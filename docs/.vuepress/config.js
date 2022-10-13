module.exports = {
    title: 'Haoran Blog',
    theme:'vuepress-theme-reco',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/WebLogo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
      ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]//移动端搜索框优化
    ],
    themeConfig: {
      type:'blog',
      logo: '/WebLogo.png',  // 左上角logo
      authorAvatar: '/avatar.jpg',
      nav: [
        { text: 'Home', link: '/' },
        {
          text: 'JavaSE',
          ariaLabel: 'Java Core',
          items: [
            { text: 'DataType', link: '/language/chinese/000' },
            { text: 'Set', link: '/language/japanese/000' }
          ]
        },
        { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },//添加时间轴
        { text: 'CSDN', link: 'https://blog.csdn.net/m0_63323097',icon: 'reco-csdn' },
      ],  
      // 侧边栏配置
      sidebar: 'auto', 
      //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
      subSidebar: 'auto',
      //设置全局作者名称
      author: 'reco_luan',
      //配置评论功能
      vssueConfig: {
        platform: 'github',
        owner: 'OWNER_OF_REPO',
        repo: 'NAME_OF_REPO',
        clientId: 'YOUR_CLIENT_ID',
        clientSecret: 'YOUR_CLIENT_SECRET',
      },
      lastUpdated: 'Last Updated',//设置文章最后更新时间
      smoothScroll: true
    },
    theme:'vuepress-theme-reco'
  };