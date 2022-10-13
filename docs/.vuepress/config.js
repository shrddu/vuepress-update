module.exports = {
    title: 'Haoran Blog',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/avatar.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    themeConfig: {
      type:'blog',
      logo: '/avatar.png',  // 左上角logo
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'External', link: 'https://google.com' },
      ],  
      sidebar: 'auto', // 侧边栏配置
      subSidebar: 'auto'//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    },
    theme:'vuepress-theme-reco',
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com'
      },
      // ...
    ]
  };