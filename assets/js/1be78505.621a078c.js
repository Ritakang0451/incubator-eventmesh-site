(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[514,546],{3238:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Y}});var n=a(7294),r=a(3905),i=a(2263),o=a(6291),l=a(8600),c=a(2122),s=a(9756),d=a(6010),u=a(9306),m=a(2214),b=a(5492),p=a(5164),h=a(6742),f=a(3919),v=a(4400),E=function(e){return n.createElement("svg",(0,c.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},g=a(4299),_=a(6806),k=a(4973),N="sidebar_1tWv",C="sidebarWithHideableNavbar_3srT",Z="sidebarHidden_1xTt",S="sidebarLogo_28Z7",I="menu_1Iah",y="menuLinkText_3zte",T="menuWithAnnouncementBar_3acx",w="collapseSidebarButton_3YaP",A="collapseSidebarButtonIcon_V-RG",M="sidebarMenuIcon_1woU",x="sidebarMenuCloseIcon_3VvA",L=["items"],R=["item","onItemClick","collapsible","activePath"],B=["item","onItemClick","activePath","collapsible"],P=function e(t,a){return"link"===t.type?(0,u.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},D=(0,n.memo)((function(e){var t=e.items,a=(0,s.Z)(e,L);return t.map((function(e,t){return n.createElement(H,(0,c.Z)({key:t,item:e},a))}))}));function H(e){switch(e.item.type){case"category":return n.createElement(W,e);case"link":default:return n.createElement(F,e)}}function W(e){var t,a=e.item,r=e.onItemClick,i=e.collapsible,o=e.activePath,l=(0,s.Z)(e,R),m=a.items,b=a.label,p=P(a,o),h=(0,u.D9)(p),f=(0,n.useState)((function(){return!!i&&(!p&&a.collapsed)})),v=f[0],E=f[1],g=(0,n.useRef)(null),_=(0,n.useState)(void 0),k=_[0],N=_[1],C=function(e){var t;void 0===e&&(e=!0),N(e?(null==(t=g.current)?void 0:t.scrollHeight)+"px":void 0)};(0,n.useEffect)((function(){p&&!h&&v&&E(!1)}),[p,h,v]);var Z=(0,n.useCallback)((function(e){e.preventDefault(),k||C(),setTimeout((function(){return E((function(e){return!e}))}),100)}),[k]);return 0===m.length?null:n.createElement("li",{className:(0,d.Z)("menu__list-item",{"menu__list-item--collapsed":v})},n.createElement("a",(0,c.Z)({className:(0,d.Z)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&p},t[y]=!i,t)),onClick:i?Z:void 0,href:i?"#":void 0},l),b),n.createElement("ul",{className:"menu__list",ref:g,style:{height:k},onTransitionEnd:function(){v||C(!1)}},n.createElement(D,{items:m,tabIndex:v?"-1":"0",onItemClick:r,collapsible:i,activePath:o})))}function F(e){var t=e.item,a=e.onItemClick,r=e.activePath,i=(e.collapsible,(0,s.Z)(e,B)),o=t.href,l=t.label,u=P(t,r);return n.createElement("li",{className:"menu__list-item",key:l},n.createElement(h.Z,(0,c.Z)({className:(0,d.Z)("menu__link",{"menu__link--active":u}),to:o},(0,f.Z)(o)&&{isNavLink:!0,exact:!0,onClick:a},i),(0,f.Z)(o)?l:n.createElement("span",null,l,n.createElement(_.Z,null))))}function U(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,k.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,d.Z)("button button--secondary button--outline",w),onClick:t},n.createElement(E,{className:A}))}function O(e){var t=e.responsiveSidebarOpened,a=e.onClick;return n.createElement("button",{"aria-label":t?(0,k.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,k.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:a},t?n.createElement("span",{className:(0,d.Z)(M,x)},"\xd7"):n.createElement(g.Z,{className:M,height:24,width:24}))}var z=function(e){var t,a,r=e.path,i=e.sidebar,o=e.sidebarCollapsible,l=void 0===o||o,c=e.onCollapse,s=e.isHidden,h=function(){var e=(0,u.nT)().isClosed,t=(0,n.useState)(!e),a=t[0],r=t[1];return(0,p.Z)((function(t){var a=t.scrollY;e||r(0===a)})),a}(),f=(0,u.LU)(),E=f.navbar.hideOnScroll,g=f.hideableSidebar,_=(0,u.nT)().isClosed,y=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1];(0,m.Z)(t);var r=(0,b.Z)();return(0,n.useEffect)((function(){r===b.D.desktop&&a(!1)}),[r]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,n.useCallback)((function(e){e.target.blur(),a(!1)}),[a]),toggleResponsiveSidebar:(0,n.useCallback)((function(){a((function(e){return!e}))}),[a])}}(),w=y.showResponsiveSidebar,A=y.closeResponsiveSidebar,M=y.toggleResponsiveSidebar;return n.createElement("div",{className:(0,d.Z)(N,(t={},t[C]=E,t[Z]=s,t))},E&&n.createElement(v.Z,{tabIndex:-1,className:S}),n.createElement("nav",{className:(0,d.Z)("menu","menu--responsive","thin-scrollbar",I,(a={"menu--show":w},a[T]=!_&&h,a)),"aria-label":(0,k.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Sidebar navigation",description:"The ARIA label for documentation menu"})},n.createElement(O,{responsiveSidebarOpened:w,onClick:M}),n.createElement("ul",{className:"menu__list"},n.createElement(D,{items:i,onItemClick:A,collapsible:l,activePath:r}))),g&&n.createElement(U,{onClick:c}))},j=a(3209),q=a(9457),G=a(5977),K={docPage:"docPage_3zOJ",docMainContainer:"docMainContainer_3Zec",docMainContainerEnhanced:"docMainContainerEnhanced_3hdE",docSidebarContainer:"docSidebarContainer_G8MK",docSidebarContainerHidden:"docSidebarContainerHidden_nSSO",collapsedDocSidebar:"collapsedDocSidebar_1Qfl",expandSidebarButtonIcon:"expandSidebarButtonIcon_1eUB",docItemWrapperEnhanced:"docItemWrapperEnhanced_1NqF"};function V(e){var t,a,o,c,s,m=e.currentDocRoute,b=e.versionMetadata,p=e.children,h=(0,i.Z)(),f=h.siteConfig,v=h.isClient,g=b.pluginId,_=b.version,N=function(e){var t,a=e.versionMetadata,n=e.currentDocRoute,r=a.permalinkToSidebar,i=a.docsSidebars,o=r[n.path]||r[(t=n.path,t.endsWith("/")?t:t+"/")]||r[function(e){return e.endsWith("/")?e.slice(0,-1):e}(n.path)];return{sidebar:i[o],sidebarName:o}}({versionMetadata:b,currentDocRoute:m}),C=N.sidebarName,Z=N.sidebar,S=(0,n.useState)(!1),I=S[0],y=S[1],T=(0,n.useState)(!1),w=T[0],A=T[1],M=(0,n.useCallback)((function(){w&&A(!1),y(!I)}),[w]);return n.createElement(l.Z,{key:v,wrapperClassName:u.kM.wrapper.docPages,pageClassName:u.kM.page.docPage,searchMetadatas:{version:_,tag:(0,u.os)(g,_)}},n.createElement("div",{className:K.docPage},Z&&n.createElement("aside",{className:(0,d.Z)(K.docSidebarContainer,(t={},t[K.docSidebarContainerHidden]=I,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(K.docSidebarContainer)&&I&&A(!0)}},n.createElement(z,{key:C,sidebar:Z,path:m.path,sidebarCollapsible:null==(a=null==(o=f.themeConfig)?void 0:o.sidebarCollapsible)||a,onCollapse:M,isHidden:w}),w&&n.createElement("div",{className:K.collapsedDocSidebar,title:(0,k.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:M,onClick:M},n.createElement(E,{className:K.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,d.Z)(K.docMainContainer,(c={},c[K.docMainContainerEnhanced]=I||!Z,c))},n.createElement("div",{className:(0,d.Z)("container padding-top--md padding-bottom--lg",K.docItemWrapper,(s={},s[K.docItemWrapperEnhanced]=I,s))},n.createElement(r.Zo,{components:j.Z},p)))))}var Y=function(e){var t=e.route.routes,a=e.versionMetadata,r=e.location,i=t.find((function(e){return(0,G.LX)(r.pathname,e)}));return i?n.createElement(V,{currentDocRoute:i,versionMetadata:a},(0,o.Z)(t,{versionMetadata:a})):n.createElement(q.default,e)}},9457:function(e,t,a){"use strict";a.r(t);var n=a(7294),r=a(8600),i=a(4973);t.default=function(){return n.createElement(r.Z,{title:(0,i.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(i.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(i.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(i.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},4971:function(e,t,a){"use strict";a.d(t,{Z:function(){return _}});var n=a(2122),r=a(9756),i=a(7294),o=a(6010),l=a(6742),c=a(9306),s=a(4996),d=a(3919),u=a(8920),m=a(6806),b="footerLogoLink_qW4Z",p="subtitle_32k1",h=a.p+"assets/images/incubator-logo-8b9b2c54534acf0eb5aae24f4ac84b1a.png",f=function(){return i.createElement("div",{className:"container container--fluid"},i.createElement("img",{src:h,alt:"Apache Incubator Logo",width:"318px"}),i.createElement("p",{className:p},"Apache EventMesh (Incubating) is an effort undergoing incubation at The Apache Software Foundation, sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF."))},v=["to","href","label","prependBaseUrlToHref"];function E(e){var t=e.to,a=e.href,o=e.label,c=e.prependBaseUrlToHref,u=(0,r.Z)(e,v),b=(0,s.Z)(t),p=(0,s.Z)(a,{forcePrependBaseUrl:!0});return i.createElement(l.Z,(0,n.Z)({className:"footer__link-item"},a?{href:c?p:a}:{to:b},u),a&&!(0,d.Z)(a)?i.createElement("span",null,o,i.createElement(m.Z,null)):o)}var g=function(e){var t=e.sources,a=e.alt;return i.createElement(u.Z,{className:"footer__logo",alt:a,sources:t})};var _=function(){var e=(0,c.LU)().footer,t=e||{},a=t.copyright,n=t.links,r=void 0===n?[]:n,d=t.logo,u=void 0===d?{}:d,m={light:(0,s.Z)(u.src),dark:(0,s.Z)(u.srcDark||u.src)};return e?i.createElement("footer",{className:(0,o.Z)("footer",{"footer--dark":"dark"===e.style})},i.createElement("div",{className:"container"},r&&r.length>0&&i.createElement("div",{className:"row footer__links"},r.map((function(e,t){return i.createElement("div",{key:t,className:"col footer__col"},null!=e.title?i.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?i.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?i.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):i.createElement("li",{key:e.href||e.to,className:"footer__item"},i.createElement(E,e))}))):null)}))),i.createElement(f,null),(u||a)&&i.createElement("div",{className:"footer__bottom text--center"},u&&(u.src||u.srcDark)&&i.createElement("div",{className:"margin-bottom--sm"},u.href?i.createElement(l.Z,{href:u.href,className:b},i.createElement(g,{alt:u.alt,sources:m})):i.createElement(g,{alt:u.alt,sources:m})),a?i.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null}}}]);