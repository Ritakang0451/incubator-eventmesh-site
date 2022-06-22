"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[9185],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||h[m]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6291:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:0},c="Introduction to EventMesh",l={unversionedId:"introduction",id:"introduction",title:"Introduction to EventMesh",description:"CI status",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/zh/docs/introduction",draft:!1,editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/introduction.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Development Roadmap",permalink:"/zh/docs/roadmap"}},p={},h=[{value:"What is EventMesh",id:"what-is-eventmesh",level:2},{value:"Features",id:"features",level:2},{value:"Components",id:"components",level:2},{value:"Contributors",id:"contributors",level:2}],u={toc:h};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction-to-eventmesh"},"Introduction to EventMesh"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh/actions/workflows/ci.yml"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/github/workflow/status/apache/incubator-eventmesh/Continuous%20Integration?logo=github&style=for-the-badge",alt:"CI status"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://codecov.io/gh/apache/incubator-eventmesh"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/codecov/c/gh/apache/incubator-eventmesh/master?logo=codecov&style=for-the-badge",alt:"CodeCov"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://lgtm.com/projects/g/apache/incubator-eventmesh/context:java"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/lgtm/grade/java/g/apache/incubator-eventmesh.svg?logo=lgtm&logoWidth=18&style=for-the-badge",alt:"Code Quality: Java"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://lgtm.com/projects/g/apache/incubator-eventmesh/alerts/"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/lgtm/alerts/g/apache/incubator-eventmesh.svg?logo=lgtm&logoWidth=18&style=for-the-badge",alt:"Total Alerts"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0.html"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/github/license/apache/incubator-eventmesh?style=for-the-badge",alt:"License"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh/releases"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/github/v/release/apache/eventmesh?style=for-the-badge",alt:"GitHub Release"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://join.slack.com/t/apacheeventmesh/shared_invite/zt-16y1n77va-q~JepYy3RqpkygDYmQaQbw"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/slack-join_chat-blue.svg?logo=slack&style=for-the-badge",alt:"Slack Status"}))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Apache EventMesh (Incubating)")," is a dynamic event-driven application runtime used to decouple the application and backend middleware layer, which supports a wide range of use cases that encompass complex multi-cloud, widely distributed topologies using diverse technology stacks."),(0,o.kt)("h2",{id:"what-is-eventmesh"},"What is EventMesh"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://solace.com/what-is-an-event-mesh"},"EventMesh")," is an architecture layer that provides dynamic distribution of events, thus event consumers could receive events from any event producer, no matter where the producer and consumer are attached to the mesh, without the need for configuration of event routing. It is enabled by a network of interconnected ",(0,o.kt)("a",{parentName:"p",href:"https://solace.com/what-is-an-event-broker/"},"event brokers")," and bridges applications and services in an ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Event-driven_architecture"},"event-driven architecture"),"."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Communication Protocol"),": EventMesh could communicate with clients with TCP, HTTP, or gRPC."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CloudEvents"),": EventMesh supports the ",(0,o.kt)("a",{parentName:"li",href:"https://cloudevents.io"},"CloudEvents")," specification as the format of the events. CloudEvents is a specification for describing event data in common formats to provide interoperability across services, platforms, and systems."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Schema Registry"),": EventMesh implements a schema registry that receives and stores schemas from clients and provides an interface for other clients to retrieve schemas."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Observability"),": EventMesh exposed a range of metrics, such as the average latency of the HTTP protocol and the number of delivered messages. The metrics could be collected and analyzed with Prometheus or OpenTelemetry."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Event Workflow Orchestration"),": EventMesh Workflow could receive an event and decide which command to trigger next based on the workflow definitions and the current workflow state. The workflow definition could be written with the ",(0,o.kt)("a",{parentName:"li",href:"https://serverlessworkflow.io"},"Serverless Workflow")," DSL.")),(0,o.kt)("h2",{id:"components"},"Components"),(0,o.kt)("p",null,"Apache EventMesh (Incubating) consists of multiple components that integrate different middlewares and messaging protocols to enhance the functionalities of the application runtime."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"eventmesh-runtime"),": The middleware that transmits events between producers and consumers, which supports cloud-native apps and microservices."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"eventmesh-sdk-java"),": The Java SDK that supports HTTP, HTTPS, TCP, and ",(0,o.kt)("a",{parentName:"li",href:"https://grpc.io"},"gRPC")," protocols."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"eventmesh-connector-plugin"),": The collection of plugins that connects middlewares such as ",(0,o.kt)("a",{parentName:"li",href:"https://kafka.apache.org"},"Apache Kafka"),", ",(0,o.kt)("a",{parentName:"li",href:"https://rocketmq.apache.org"},"Apache RocketMQ"),", ",(0,o.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/"},"Apache Pulsar"),", and ",(0,o.kt)("a",{parentName:"li",href:"https://redis.io"},"Redis"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"eventmesh-registry-plugin"),": The collection of plugins that integrate service registries such as ",(0,o.kt)("a",{parentName:"li",href:"https://nacos.io"},"Nacos")," and ",(0,o.kt)("a",{parentName:"li",href:"https://etcd.io"},"etcd"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"eventmesh-security-plugin"),": The collection of plugins that implement security mechanisms, such as ACL (access control list), authentication, and authorization."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"eventmesh-protocol-plugin"),": The collection of plugins that implement messaging protocols, such as ",(0,o.kt)("a",{parentName:"li",href:"https://cloudevents.io"},"CloudEvents")," and ",(0,o.kt)("a",{parentName:"li",href:"https://mqtt.org"},"MQTT"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"eventmesh-admin"),": The control plane that manages clients, topics, and subscriptions.")),(0,o.kt)("h2",{id:"contributors"},"Contributors"),(0,o.kt)("p",null,"Each contributor has played an important role in promoting the robust development of Apache EventMesh (Incubating). We sincerely appreciate all contributors who have contributed code and documents. The following is the list of contributors in EventMesh-related repositories."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/graphs/contributors"},"apache/incubator-eventmesh")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh-site/graphs/contributors"},"apache/incubator-eventmesh-site"))))}m.isMDXComponent=!0}}]);