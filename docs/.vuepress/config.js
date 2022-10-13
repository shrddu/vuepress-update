module.exports = {
    title: 'Haoran Blog',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/avatar.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    themeConfig: {
      logo: '/avatar.png',  // 左上角logo
      nav:[ // 导航栏配置
        {text: 'CSDN', link: 'https://blog.csdn.net/m0_63323097?spm=1000.2115.3001.5343' },
        {text: '投资见解', link: 'https://www.yuque.com/nieyulin/ahod2h' },
        {text: '投资文章', link: 'https://www.yuque.com/invest/gi5ot6'},
        {text: '前端面试题', link: 'https://www.yuque.com/nieyulin/lunpyu'},
        {text: 'Github', link: 'https://github.com/shrddu'}
      ],
      sidebar: 'auto', // 侧边栏配置
    },
    theme:'vuepress-theme-reco'
  };