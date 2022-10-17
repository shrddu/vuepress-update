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
            { text: '面向对象', link:'/categories/面向对象/'},
            { text: '异常处理', link:'/categories/异常处理/'},
            { text: '多线程', link:'/categories/多线程/'},
            { text: '常用类', link:'/categories/常用类/'},
            { text: '枚举类', link:'/categories/枚举类/'},
            { text: '注解', link:'/categories/注解/'},
            { text: '集合', link:'/categories/集合/'},
            { text: '泛型', link:'/categories/泛型/'},
            { text: 'IO', link:'/categories/IO/'},
            { text: '反射', link:'/categories/反射/'},
            { text: '新特性', link:'/categories/新特性/'},
          ]
        },
        {
          text: 'JavaEE',
          items: [
            { text: '中间件', link:'/categories/中间件/'},
            { text: '框架', link:'/categories/框架/'},
            { text: '分布式', link:'/categories/分布式/'},
            { text: '插件', link:'/categories/插件/'},
            { text: '项目', link:'/categories/项目/'},
          ]
        },
        {
          text: '前端',
          items: [
            { text: 'Vue', link:'/categories/Vue/'},
            { text: 'React', link:'/categories/React/'},
          ]
        },
        {
          text: '计算机内功',
          items:[
              {text:'计算机网络',link:'/categories/计算机网络/'},
              {text:'计算机操作系统',link:'/categories/计算机操作系统/'},
              {text:'计算机组成原理',link:'/categories/计算机组成原理/'},
              {text:'算法',link:'/categories/算法/'},
              {text:'设计模式',link:'/categories/设计模式/'},
          ]
        },
        {
          text: '杂谈',
          items:[
              {text:'技术杂谈',link:'/categories/技术杂谈/'},
              {text:'读书心得',link:'/categories/读书心得/'},
              {text:'经验感悟',link:'/categories/经验感悟/'},
          ]
        },
        { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },//添加时间轴
        {
          text: 'Contact',
          ariaLabel: 'Contact Me',
          items: [
            { text: 'CSDN', link: 'https://blog.csdn.net/m0_63323097',icon: 'reco-csdn' },
            { text: 'Github', link: 'https://github.com/shrddu',icon: 'reco-github' },
          ]
        },
      ],  
      // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
      nextLinks: true,
      // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
      prevLinks: true,
      // 侧边栏配置
      sidebar: 'auto', 
      //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
      subSidebar: 'auto',
      //配置查看源码
      repo: 'shrddu/vuepress-update',
      // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
      // repo: 'shrddu/shrddu.github.io',
      // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
      // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
      repoLabel: '下载文章',

      // 以下为可选的编辑链接选项
      // editLinks: true,
      // 默认为 "Edit this page"
      // editLinkText: '查看源码/文件',
      //设置全局作者名称
      author: 'Haoran',
      //配置评论功能
      vssueConfig: {
        platform: 'github',
        owner: 'shrddu',
        repo: 'shrddu.github.io',
        clientId: '9ef79727a97c24a29f34',
        clientSecret: '50bfb2a7fef434a6a2ed979fb8133f7644606771',
      },
      lastUpdated: 'Last Updated',//设置文章最后更新时间
      smoothScroll: true,//设置滑动效果
      //设置左侧侧边栏
      displayAllHeaders: true // 默认值：false
    },
    theme:'vuepress-theme-reco',
    plugins:[
      //侧边栏自动生成
      ["vuepress-plugin-auto-sidebar",{}],4
      // ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
      //   width: '260px', // 默认 260px
      //   title: '消息提示'
    //   ['ribbon',{
    //     size: 90, // width of the ribbon, default: 90
    //     opacity: 0.8, // opacity of the ribbon, default: 0.3
    //     zIndex: -1, // z-index property of the background, default: -1
    //   }],
    //   [
    //     'cursor-effects',
    //     {
    //        size: 2, // size of the particle, default: 2
    //        shape: ['star'|'circle'], // shape of the particle, default: 'star'
    //        zIndex: 999999999, // z-index property of the canvas, default: 999999999
    //     },
    //  ],
      //   body: [
      //     {
      //       type: 'title',
      //       content: '欢迎加入QQ交流群 🎉🎉🎉',
      //       style: 'text-aligin: center;'
      //     },
      //     {
      //       type: 'image',
      //       src: '/Java学习交流群群二维码.png'
      //     }
      //   ],
      //   footer: [
      //     // {
      //     //   type: 'button',
      //     //   text: '打赏',
      //     //   link: '/donate'
      //     // },
      //     // {
      //     //   type: 'button',
      //     //   text: '打赏',
      //     //   link: '/donate'
      //     // }
      //   ]
      // }]
    ]
  };