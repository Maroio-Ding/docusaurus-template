(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{77:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(95),m=t(98),c=t(91),o=t(100);a.default=function(e){const{metadata:a,items:t,sidebar:r}=e,{allTagsPath:s,name:i,count:g}=a;return n.a.createElement(l.a,{title:`Posts tagged "${i}"`,description:`Blog | Tagged "${i}"`,wrapperClassName:"blog-wrapper"},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--2"},n.a.createElement(o.a,{sidebar:r})),n.a.createElement("main",{className:"col col--8"},n.a.createElement("h1",null,g," ",function(e,a){return e>1?`${a}s`:a}(g,"post"),' tagged with "',i,'"'),n.a.createElement(c.a,{href:s},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},t.map((({content:e})=>n.a.createElement(m.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},n.a.createElement(e,null)))))))))}},98:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(89),m=t(94),c=t(23),o=t(91),s=t(101),i=t(92),g=t(55),u=t.n(g);const E=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:r,truncated:g,isBlogPostPage:d=!1}=e,{date:p,permalink:h,tags:b,readingTime:v}=r,{author:N,title:w,image:f,keywords:_}=t,k=t.author_url||t.authorURL,y=t.author_title||t.authorTitle,T=t.author_image_url||t.authorImageURL,M=Object(i.a)(f,{absolute:!0});return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,_&&_.length&&n.a.createElement("meta",{name:"keywords",content:_.join(",")}),f&&n.a.createElement("meta",{property:"og:image",content:M}),f&&n.a.createElement("meta",{name:"twitter:image",content:M}),f&&n.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${w}`})),n.a.createElement("article",{className:d?void 0:"margin-bottom--xl"},(()=>{const e=d?"h1":"h2",a=p.substring(0,10).split("-"),t=a[0],r=E[parseInt(a[1],10)-1],m=parseInt(a[2],10);return n.a.createElement("header",null,n.a.createElement(e,{className:Object(l.a)("margin-bottom--sm",u.a.blogPostTitle)},d?w:n.a.createElement(o.a,{to:h},w)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:p,className:u.a.blogPostDate},r," ",m,", ",t," ",v&&n.a.createElement(n.a.Fragment,null," \xb7 ",Math.ceil(v)," min read"))),n.a.createElement("div",{className:"avatar margin-vert--md"},T&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:k,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:T,alt:N})),n.a.createElement("div",{className:"avatar__intro"},N&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:k,target:"_blank",rel:"noreferrer noopener"},N)),n.a.createElement("small",{className:"avatar__subtitle"},y)))))})(),n.a.createElement("section",{className:"markdown"},n.a.createElement(m.a,{components:s.a},a)),(b.length>0||g)&&n.a.createElement("footer",{className:"row margin-vert--lg"},b.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),b.map((({label:e,permalink:a})=>n.a.createElement(o.a,{key:a,className:"margin-horiz--sm",to:a},e)))),g&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(o.a,{to:r.permalink,"aria-label":`Read more about ${w}`},n.a.createElement("strong",null,"Read More"))))))}}}]);