(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[237,565],{7430:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Z}});var n=a(7294),r=a(1904),c=a(6010),s=a(6742),l=a(2263),i="title_ttk2",o="subtitle_3GeI",m="description_hzZe",u="heroBanner_FmNZ",d="buttons_2PKm",f="heroImage_3Lrn",h=a.p+"assets/images/eventmesh-d143fb71bb9e78d73116b678d662fef7.png",E=function(){var e=(0,l.Z)().siteConfig;return n.createElement("header",{className:(0,c.Z)("hero",u)},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6"},n.createElement("h1",{className:i},e.title),n.createElement("h2",{className:o},"Incubating"),n.createElement("p",{className:m},e.tagline),n.createElement("div",{className:d},n.createElement(s.Z,{className:"button button--primary button--lg",to:"/docs/intro"},"Get Started"),n.createElement(s.Z,{className:"button button--secondary button--outline button--lg",href:"https://github.com/apache/incubator-eventmesh"},"GitHub"))),n.createElement("div",{className:(0,c.Z)("col col--6",f)},n.createElement("img",{src:h,alt:"EventMesh"})))))},p="title_2D2I",b="description_KpAh",v="feature_3oKz",g="features_1kL8",_=[{title:"EventMesh Ecosystem",description:"What is EventMesh",image:a.p+"assets/images/eventmesh-ecosystem-5f5ba7d23fc6493d24821ead84ab36c1.png"},{title:"EventMesh Architecture",description:"EventMesh ability and architecture",image:a.p+"assets/images/eventmesh-architecture-1f1b8063d0a3f523e8432639351a750f.png"},{title:"EventMesh Cloud Native",description:"Panels and cloud native deployment",image:a.p+"assets/images/eventmesh-cloud-native-3c07ec7947f356d4e58afe8752ffd3b7.png"}],N=function(e){var t=e.title,a=e.description,r=e.image;return n.createElement("div",{className:(0,c.Z)("col col--4 text--center",v)},n.createElement("p",{className:p},t),n.createElement("p",{className:b},a),n.createElement("img",{src:r,alt:t}))},y=function(){return n.createElement("section",{className:g},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},_.map((function(e){var t=e.title,a=e.description,r=e.image;return n.createElement(N,{key:t,title:t,description:a,image:r})})))))},Z=function(){return n.createElement(r.Z,{description:"Apache EventMesh (Incubating)"},n.createElement(E,null),n.createElement("main",null,n.createElement(y,null)))}},4971:function(e,t,a){"use strict";a.d(t,{Z:function(){return _}});var n=a(2122),r=a(9756),c=a(7294),s=a(6010),l=a(6742),i=a(941),o=a(4996),m=a(3919),u=a(8465),d=a(8617),f="footerLogoLink_qW4Z",h="subtitle_32k1",E=a.p+"assets/images/incubator-logo-8b9b2c54534acf0eb5aae24f4ac84b1a.png",p=function(){return c.createElement("div",{className:"container container--fluid"},c.createElement("img",{src:E,alt:"Apache Incubator Logo",width:"318px"}),c.createElement("p",{className:h},"Apache EventMesh (Incubating) is an effort undergoing incubation at The Apache Software Foundation, sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF."))},b=["to","href","label","prependBaseUrlToHref"];function v(e){var t=e.to,a=e.href,s=e.label,i=e.prependBaseUrlToHref,u=(0,r.Z)(e,b),f=(0,o.Z)(t),h=(0,o.Z)(a,{forcePrependBaseUrl:!0});return c.createElement(l.Z,(0,n.Z)({className:"footer__link-item"},a?{href:i?h:a}:{to:f},u),a&&!(0,m.Z)(a)?c.createElement("span",null,s,c.createElement(d.Z,null)):s)}var g=function(e){var t=e.sources,a=e.alt;return c.createElement(u.Z,{className:"footer__logo",alt:a,sources:t})};var _=function(){var e=(0,i.LU)().footer,t=e||{},a=t.copyright,n=t.links,r=void 0===n?[]:n,m=t.logo,u=void 0===m?{}:m,d={light:(0,o.Z)(u.src),dark:(0,o.Z)(u.srcDark||u.src)};return e?c.createElement("footer",{className:(0,s.Z)("footer",{"footer--dark":"dark"===e.style})},c.createElement("div",{className:"container"},r&&r.length>0&&c.createElement("div",{className:"row footer__links"},r.map((function(e,t){return c.createElement("div",{key:t,className:"col footer__col"},null!=e.title?c.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?c.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.createElement("li",{key:e.href||e.to,className:"footer__item"},c.createElement(v,e))}))):null)}))),c.createElement(p,null),(u||a)&&c.createElement("div",{className:"footer__bottom text--center"},u&&(u.src||u.srcDark)&&c.createElement("div",{className:"margin-bottom--sm"},u.href?c.createElement(l.Z,{href:u.href,className:f},c.createElement(g,{alt:u.alt,sources:d})):c.createElement(g,{alt:u.alt,sources:d})),a?c.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null}}}]);