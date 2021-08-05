module.exports = {
  title: '大哥的博客',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/23.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '前端基础', link: '/language/chinese/ab' },
      {text: '算法题库', link: '/algorithm/'},
      {text: '微博', link: 'https://baidu.com'}      
    ],
    sidebar: {
        '/':[
            { 
                title: '整体介绍',  //组名
                children: ['']   //该分组下要显示的文件的目录
            },
            {
                title: '快速开始',
                children: [
                {
                      title: 'A',   
                      children: ['ab'],
                  },{
                      title: 'AB',   
                      children: ['/language/chinese/ac'],
                  }
                ]
            }
        ],
        '/language/chinese/': [
            {
                title: 'Group1',  //组名
                children: [''],   //该分组下要显示的文件的目录
            },
            {
                title: 'Group2',
                children: ['ab'],
            },
        ],
        '/language/english/': [
            '',
        ],
    }, // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
 
};