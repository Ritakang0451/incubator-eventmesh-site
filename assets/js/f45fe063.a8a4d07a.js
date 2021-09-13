(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[578],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),m=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=m(r),u=a,d=p["".concat(o,".").concat(u)]||p[u]||h[u]||s;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var m=2;m<s;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6559:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return l},default:function(){return p}});var n=r(2122),a=r(9756),s=(r(7294),r(3905)),i=["components"],c={},o="EventMesh SchemaRegistry (OpenSchema)",m={unversionedId:"features/eventmesh-schemaregistry-design",id:"features/eventmesh-schemaregistry-design",isDocsHomePage:!1,title:"EventMesh SchemaRegistry (OpenSchema)",description:"Introduction",source:"@site/docs/features/eventmesh-schemaregistry-design.md",sourceDirName:"features",slug:"/features/eventmesh-schemaregistry-design",permalink:"/docs/features/eventmesh-schemaregistry-design",editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/features/eventmesh-schemaregistry-design.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventMesh Metrics (OpenTelemetry+Prometheus)",permalink:"/docs/features/eventmesh-metrics-export-design"},next:{title:"EventMesh Stream (Camel+Spring Cloud Stream)",permalink:"/docs/features/eventmesh-stream-design"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"An Overview of Schema and Schema Registry",id:"an-overview-of-schema-and-schema-registry",children:[{value:"Schema",id:"schema",children:[]},{value:"Schema Registry",id:"schema-registry",children:[]},{value:"A Comparison of Schema Registry in Other Projects",id:"a-comparison-of-schema-registry-in-other-projects",children:[]}]},{value:"An Overview of OpenSchema",id:"an-overview-of-openschema",children:[]},{value:"Requirements(Goals)",id:"requirementsgoals",children:[]},{value:"Design Details",id:"design-details",children:[{value:"Architecture",id:"architecture",children:[]},{value:"Process of Transferring Messages under Schema Registry",id:"process-of-transferring-messages-under-schema-registry",children:[]}]},{value:"References",id:"references",children:[]}],h={toc:l};function p(e){var t=e.components,c=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"eventmesh-schemaregistry-openschema"},"EventMesh SchemaRegistry (OpenSchema)"),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh"},"EventMesh(incubating)")," is a dynamic cloud-native eventing infrastructure."),(0,s.kt)("h2",{id:"an-overview-of-schema-and-schema-registry"},"An Overview of Schema and Schema Registry"),(0,s.kt)("h3",{id:"schema"},"Schema"),(0,s.kt)("p",null,"A Schema stands for the description of serialization instances(string/stream/file/...) and has two properties. First, it is also in the format of serialization type. Second, it defines what requirements such serialized instances should satisfy. "),(0,s.kt)("p",null,"Besides describing a serialization instance, a Schema may also be used for validating whether an instance is legitimate. The reason is that it defines the ",(0,s.kt)("inlineCode",{parentName:"p"},"type"),"(and other properties) of a serialized instance and inside keys. Taking JSON Schema for example, it could not only be referred when describing a JSON string, but also be used for validating whether a string satisfies properties defined in the schema",(0,s.kt)("a",{parentName:"p",href:"#References"},"[1]"),"."),(0,s.kt)("p",null,"Commonly, there are JSON Schema, Protobuf Schema, and Avro Schema."),(0,s.kt)("h3",{id:"schema-registry"},"Schema Registry"),(0,s.kt)("p",null,"Schema Registry is a server provides RESTful interfaces. It could receive and store Schemas from clients, as well as provide intrefaces for other clients to retrieve Schemas from it. "),(0,s.kt)("p",null,"It could be applied to validation process and (de-)serialization process."),(0,s.kt)("h3",{id:"a-comparison-of-schema-registry-in-other-projects"},"A Comparison of Schema Registry in Other Projects"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},"Project"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Application"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"EMQ",(0,s.kt)("a",{parentName:"td",href:"#References"},"[2]")),(0,s.kt)("td",{parentName:"tr",align:"left"},'Mainly in (de-)serialization process. Use "Schema Registry" and "Rule Matching" to transfer a message from one serialization format to another.')),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"Pulsar",(0,s.kt)("a",{parentName:"td",href:"#References"},"[3]")),(0,s.kt)("td",{parentName:"tr",align:"left"},'Mainly in validation process. Use "Schema Registry" to validate a message.')),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"Confluentinc",(0,s.kt)("a",{parentName:"td",href:"#References"},"[4]")),(0,s.kt)("td",{parentName:"tr",align:"left"},"In both validation and (de-)serialization process.")))),(0,s.kt)("h2",{id:"an-overview-of-openschema"},"An Overview of OpenSchema"),(0,s.kt)("p",null,"OpenSchema",(0,s.kt)("a",{parentName:"p",href:"#References"},"[5]")," proposes a specification for data schema when exchanging the message and event in more and more modern cloud-native applications. It designs a RESTful interface for storing and retrieving such as Avro, JSON Schema, and Protobuf3 schemas from three aspects(subject/schema/compatibility)."),(0,s.kt)("h2",{id:"requirementsgoals"},"Requirements(Goals)"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Requirement ID"),(0,s.kt)("th",{parentName:"tr",align:null},"Requirement Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"F-1"),(0,s.kt)("td",{parentName:"tr",align:null},"In transmission, no message needs to contain schema information which bring efficiency."),(0,s.kt)("td",{parentName:"tr",align:null},"Functionality")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"F-2"),(0,s.kt)("td",{parentName:"tr",align:null},"The message content from producer could be validated whether serialized correctly according to schema."),(0,s.kt)("td",{parentName:"tr",align:null},"Functionality")))),(0,s.kt)("h2",{id:"design-details"},"Design Details"),(0,s.kt)("h3",{id:"architecture"},"Architecture"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"OpenSchema",src:r(3964).Z})),(0,s.kt)("h3",{id:"process-of-transferring-messages-under-schema-registry"},"Process of Transferring Messages under Schema Registry"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Process",src:r(3972).Z})),(0,s.kt)("p",null,"The highlevel process of messages transmission undergoes 10 steps as follows:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'step1: Consumer subscribes "TOPIC" messages from EventMesh.'),(0,s.kt)("li",{parentName:"ul"},"step2: Producer registers a schema to EventMesh."),(0,s.kt)("li",{parentName:"ul"},"step3: EventMesh registers a schema to Schema Registry."),(0,s.kt)("li",{parentName:"ul"},"step4: Schema Registry returns the id of newly created schema; EventMesh caches such id and schema."),(0,s.kt)("li",{parentName:"ul"},"step5: EventMesh returns the id of schema to Producer."),(0,s.kt)("li",{parentName:"ul"},"step6: Producer patches the id in front of messages and send messages to EventMesh."),(0,s.kt)("li",{parentName:"ul"},"step7: EventMesh validates the messages in the entry port and send it to EventStore; EventMesh retrieves messages from EventStore."),(0,s.kt)("li",{parentName:"ul"},"step8: EventMesh unpatches the id and send it to Schema Registry(if such <id, schema> does not exists in local cache)."),(0,s.kt)("li",{parentName:"ul"},"step9: Schema Registry returns schema and EventMesh caches it."),(0,s.kt)("li",{parentName:"ul"},"step10: EventMesh patches schema in front of messages and push it to consumer.")),(0,s.kt)("h2",{id:"references"},"References"),(0,s.kt)("p",null,"[1][schema validator (github.com)]","(",(0,s.kt)("a",{parentName:"p",href:"https://github.com/search?q=schema+validator"},"https://github.com/search?q=schema+validator"),")"),(0,s.kt)("p",null,"[2][EMQ : Schema Registry]","(",(0,s.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/33e0655c642b"},"https://www.jianshu.com/p/33e0655c642b"),")"),(0,s.kt)("p",null,"[3][Pulsar : Schema Registry]","(",(0,s.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/PaB66-Si00cX80py5ig5Mw"},"https://mp.weixin.qq.com/s/PaB66-Si00cX80py5ig5Mw"),")"),(0,s.kt)("p",null,"[4][confluentinc/schema-registry]","(",(0,s.kt)("a",{parentName:"p",href:"https://github.com/confluentinc/schema-registry"},"https://github.com/confluentinc/schema-registry"),")"),(0,s.kt)("p",null,"[5][openmessaging/openschema]","(",(0,s.kt)("a",{parentName:"p",href:"https://github.com/openmessaging/openschema"},"https://github.com/openmessaging/openschema"),")"))}p.isMDXComponent=!0},3964:function(e,t,r){"use strict";t.Z=r.p+"assets/images/eventmesh-schemaregistry-arch-e376404fc6051685e1e14f6ea15e9bd8.png"},3972:function(e,t,r){"use strict";t.Z=r.p+"assets/images/eventmesh-schemaregistry-process-204fb6690bbd4f93f6b3571df13b114b.jpg"}}]);