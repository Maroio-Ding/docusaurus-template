module.exports = {
  title: "Maroio's Blog",              // 站点名称
  tagline: 'The tagline of this site',  // 站点描述
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://github.com/Maroio-Ding/My_ImgBed/blob/main/Basic/avatar.png',           // 站点的图标
  
  url: 'https://github.com/Maroio-Ding/docusaurus-wiki/', // GitHub 页面的 URL
  baseUrl: '/docusaurus-wiki/',                         // 项目的基本 URL 设置为 /仓库名/
  organizationName: 'Maroio-Ding',            // 设置为 Github 用户名
  projectName: 'docusaurus-wiki',   // 设置为 Github 仓库名
  
  
  themeConfig: {

    // 配置搜索栏需要到 algolia 配置
    // algolia: {
    //   apiKey: 'YOUR_API_KEY',
    //   indexName: 'YOUR_INDEX_NAME',

    //   // Optional: see doc section bellow
    //   contextualSearch: true,

    //   // Optional: Algolia search parameters
    //   searchParameters: {},

    //   //... other Algolia params
    // },
    // 导航栏配置
    navbar: {
      title: "Maroio's Blog",                 // 名称
      
      // 设置logo 如果需要可以取消注释  logo文件推荐转为 .svg 格式
      // logo: {
      //   alt: 'My Site Logo',            
      //   src: 'img/logo.svg',
      // },
      
      // 导航栏上的按钮  按照相应的格式可以创建新的按钮
      items: [
        // {
        //   to: '/',                   // 要跳转的页面
        //   label: 'Blog',                // 按钮名称
        //   position: 'left'              // 按钮位于左边还是右边
        // },
        
        {
          to: 'docs/Wolf-Wiki/Howto-BuildRobot01',
          activeBasePath: 'docs',
          label: 'Wolf🐺',
          position: 'left',
        },
        
        {
          to: 'docs/Reading-Note/Outlier',
          activeBasePath: 'docs',
          label: '读书笔记📚',
          position: 'left',
        },

        {
          to: 'docs/My-Daily/Violin01',
          activeBasePath: 'docs',
          label: 'My Daily🤓',
          position: 'left',
        },

        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Doodles🎨',
          position: 'left',
        },

        {
          href: 'https://github.com/Maroio-Ding/docusaurus-wiki',  // 如果要跳转链接则使用 herf
          label: '本站源码',
          position: 'right',
        },
      ],
    },

    // 页脚配置
    footer: {
      style: 'dark',                    // 页脚风格
      links: [

        // 同样的方式创建一个分类
        {
          title: 'Contact',
          // 同样的格式创建新的按钮
          items: [  
            {
              label: 'GitHub',           // 标签
              to: 'https://github.com/Maroio-Ding',              // 要跳转的页面
            },
            {
              label: 'Wolf-Wiki',           // 标签
              to: 'https://wiki.wildwolf.tech',              // 要跳转的页面
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Maroio. Built with Docusaurus.`,
    },
  },
  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          showReadingTime: true,
          path: "./blog",
          routeBasePath: "/",           // 这里将 blog/ 设置为首页
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          
          // 修改为自己的链接，在文章底部添加编辑此页面的链接
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
