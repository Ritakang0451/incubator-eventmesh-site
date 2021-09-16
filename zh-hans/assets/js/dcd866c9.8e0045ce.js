(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[970],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4978:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l=["components"],i={},s="Eventmesh-runtime Quick start Instruction",p={unversionedId:"instructions/eventmesh-runtime-quickstart",id:"instructions/eventmesh-runtime-quickstart",isDocsHomePage:!1,title:"Eventmesh-runtime Quick start Instruction",description:"1 Remote Deploy",source:"@site/docs/instructions/eventmesh-runtime-quickstart.md",sourceDirName:"instructions",slug:"/instructions/eventmesh-runtime-quickstart",permalink:"/zh-hans/docs/instructions/eventmesh-runtime-quickstart",editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/instructions/eventmesh-runtime-quickstart.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"eventmesh-runtime-protocol",permalink:"/zh-hans/docs/instructions/eventmesh-runtime-protocol"},next:{title:"eventmesh-sdk-java-quickstart",permalink:"/zh-hans/docs/instructions/eventmesh-sdk-java-quickstart"}},u=[{value:"1 Remote Deploy",id:"1-remote-deploy",children:[{value:"1.1 dependencies",id:"11-dependencies",children:[]},{value:"1.2 download sources",id:"12-download-sources",children:[]},{value:"1.3 build sources",id:"13-build-sources",children:[]},{value:"1.4 Deployment",id:"14-deployment",children:[]}]},{value:"2 Run Locally",id:"2-run-locally",children:[{value:"2.1 dependencies",id:"21-dependencies",children:[]},{value:"2.2 download sources",id:"22-download-sources",children:[]},{value:"2.3 Run",id:"23-run",children:[]}]},{value:"3 Run with Docker",id:"3-run-with-docker",children:[{value:"3.1 Pull",id:"31-pull",children:[]},{value:"3.2 Config",id:"32-config",children:[]},{value:"3.3 Run",id:"33-run",children:[]},{value:"3.4 Test",id:"34-test",children:[]}]}],c={toc:u};function m(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"eventmesh-runtime-quick-start-instruction"},"Eventmesh-runtime Quick start Instruction"),(0,o.kt)("h2",{id:"1-remote-deploy"},"1 Remote Deploy"),(0,o.kt)("h3",{id:"11-dependencies"},"1.1 dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"64bit OS, Linux/Unix is recommended;\n64bit JDK 1.8+;\nGradle at least 7.0, eg 7.0.*\n")),(0,o.kt)("h3",{id:"12-download-sources"},"1.2 download sources"),(0,o.kt)("p",null,"download source code from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh"},"https://github.com/apache/incubator-eventmesh"),(0,o.kt)("br",{parentName:"p"}),"\n","You will get ",(0,o.kt)("strong",{parentName:"p"},"EventMesh-master.zip")),(0,o.kt)("h3",{id:"13-build-sources"},"1.3 build sources"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-$xslt"},"unzip EventMesh-master.zip\ncd /*YOUR DEPLOY PATH*/EventMesh-master\ngradle clean dist copyConnectorPlugin tar -x test\n")),(0,o.kt)("p",null,"You will get ",(0,o.kt)("strong",{parentName:"p"},"EventMesh_1.2.0.tar.gz")," in directory /",(0,o.kt)("em",{parentName:"p"}," YOUR DEPLOY PATH "),"/EventMesh-master/build"),(0,o.kt)("h3",{id:"14-deployment"},"1.4 Deployment"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"deploy eventmesh-runtime")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"upload Eventmesh_1.2.0.tar.gz\ntar -zxvf Eventmesh_1.2.0.tar.gz\ncd conf\nconfig your eventMesh.properties\ncd ../bin\nsh start.sh\n")),(0,o.kt)("p",null,'If you see "EventMeshTCPServer',"[port=10000]",' started....", you setup runtime successfully.'),(0,o.kt)("h2",{id:"2-run-locally"},"2 Run Locally"),(0,o.kt)("h3",{id:"21-dependencies"},"2.1 dependencies"),(0,o.kt)("p",null,"Same with 1.1, but it can be only compiled in JDK 1.8"),(0,o.kt)("h3",{id:"22-download-sources"},"2.2 download sources"),(0,o.kt)("p",null,"Same with 1.2"),(0,o.kt)("h3",{id:"23-run"},"2.3 Run"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.3.1 Project structure\uff1a")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"project-structure.png",src:n(9899).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"eventmesh-common : eventmesh common classes and method module"),(0,o.kt)("li",{parentName:"ul"},"eventmesh-connector-api : eventmesh connector api definition module"),(0,o.kt)("li",{parentName:"ul"},"eventmesh-connector-plugin : eventmesh connector plugin instance module"),(0,o.kt)("li",{parentName:"ul"},"eventmesh-runtime : eventmesh runtime module"),(0,o.kt)("li",{parentName:"ul"},"eventmesh-sdk-java : eventmesh java client sdk"),(0,o.kt)("li",{parentName:"ul"},"eventmesh-starter : eventmesh project local start entry"),(0,o.kt)("li",{parentName:"ul"},"eventmesh-spi : eventmesh SPI load module")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ps: The plugin module follows the eventmesh SPI specification, custom SPI interface need to be identified with the @EventMeshSPI annotation.\nThe plugin instance needs to be configured in corresponding module under /main/resources/meta-inf/eventmesh with the mapping file of\nrelated interface and implementation class. The content of the file is a mapping of plugin instance name to plugin instance, you can find more\ndetail in eventmesh-connector-rocketmq module")),(0,o.kt)("p",null,"The plugin can be loaded from classpath and plugin directory. In local develop, you can declare the used plugins in build.gradle of eventmesh-starter module,\nor execute copyConnectorPlugin task of gradle to copy the plugin instance jar to dist/plugin directory. By default, eventmesh will load the plugins in project's\ndist/plugin, this can be changed by add -DeventMeshPluginDir=your_plugin_directory.\nThe plugin instance need to be used at runtime can be configured in eventmesh.properties.\nIf you need to use rokectmq plugin to start eventmesh-runtime, you need to declare the dependcy in build.gradle of eventmesh-starter module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'   implementation project(":eventmesh-connector-plugin:eventmesh-connector-rocketmq")\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.3.2 Configure plugin")),(0,o.kt)("p",null,"-Deventmesh.log.home=eventmesh-runtime/logs"),(0,o.kt)("p",null,"Specify the connector plugin that will be loaded after the project start by declaring in ",(0,o.kt)("inlineCode",{parentName:"p"},"eventMesh.properties")),(0,o.kt)("p",null,"Modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"eventMesh.properties")," file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"confPath")," directory"),(0,o.kt)("p",null,"load ",(0,o.kt)("strong",{parentName:"p"},"rocketmq connector")," configuration\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"#connector plugin\neventMesh.connector.plugin.type=rocketmq\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.3.3 Configure VM Options")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"-Dlog4j.configurationFile=eventmesh-runtime/conf/log4j2.xml\n-Deventmesh.log.home=eventmesh-runtime/logs\n-Deventmesh.home=eventmesh-runtime\n-DconfPath=eventmesh-runtime/conf\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ps: If you use Windows, you may need to replace the file separator to \\")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.3.4 Run")),(0,o.kt)("p",null,"running ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.eventmesh.starter.StartUp")," main method"),(0,o.kt)("h2",{id:"3-run-with-docker"},"3 Run with Docker"),(0,o.kt)("h3",{id:"31-pull"},"3.1 Pull"),(0,o.kt)("p",null,"execute ",(0,o.kt)("inlineCode",{parentName:"p"},"docker pull eventmesh/eventmesh-rocketmq:v1.2.0")," , you will get EventMesh image like below"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20210309155255510",src:n(4520).Z})),(0,o.kt)("h3",{id:"32-config"},"3.2 Config"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"prerequisite")," : may be you need download the source code from git first and use the contents of these files(eventMesh.properties and rocketmq-client.properties) as a reference for the following actions.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.2.1 Files to configure")),(0,o.kt)("p",null,"Before run the container you should configure some files."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"eventMesh.properties")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Configuration Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"eventMesh.server.http.port"),(0,o.kt)("td",{parentName:"tr",align:null},"10105"),(0,o.kt)("td",{parentName:"tr",align:null},"EventMesh http server port")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"eventMesh.server.tcp.port"),(0,o.kt)("td",{parentName:"tr",align:null},"10000"),(0,o.kt)("td",{parentName:"tr",align:null},"EventMesh tcp server port")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"rocketmq-client.properties")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Configuration Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"eventMesh.server.rocketmq.namesrvAddr"),(0,o.kt)("td",{parentName:"tr",align:null},"127.0.0.1:9876;127.0.0.1:9876"),(0,o.kt)("td",{parentName:"tr",align:null},"RocketMQ namesrv default address")))),(0,o.kt)("p",null,"After pull the EventMesh image to your host machine, you can execute command below to configure ",(0,o.kt)("strong",{parentName:"p"},"eventMesh.properties"),"\nand ",(0,o.kt)("strong",{parentName:"p"},"rocketmq-client.properties")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.2.2 Create Files")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p /data/eventmesh/rocketmq/conf\ncd /data/eventmesh/rocketmq/conf\nvi eventMesh.properties\nvi rocketmq-client.properties\n")),(0,o.kt)("p",null,"The contents of these files can reference\nfrom ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/EventMesh/blob/develop/eventmesh-runtime/conf/eventMesh.properties"},"eventMesh.properties"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/EventMesh/blob/develop/eventmesh-runtime/conf/rocketmq-client.properties"},"rocketmq-client.properties")),(0,o.kt)("h3",{id:"33-run"},"3.3 Run"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.3.1 run")),(0,o.kt)("p",null,"execute command below to run container"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d -p 10000:10000 -p 10105:10105 -v /data/eventmesh/rocketmq/conf/eventMesh.properties:/data/app/eventmesh/conf/eventMesh.properties -v /data/eventmesh/rocketmq/conf/rocketmq-client.properties:/data/app/eventmesh/conf/rocketmq-client.properties docker.io/eventmesh/eventmesh-rocketmq:v1.2.0\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"-p : binding the container port with host machine port"),(0,o.kt)("p",{parentName:"blockquote"},"-v : mount the container configuration files with host machine files")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.3.2 check container")),(0,o.kt)("p",null,"execute ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps")," to check the container health"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-docker-ps",src:n(8387).Z})),(0,o.kt)("p",null,"execute ",(0,o.kt)("inlineCode",{parentName:"p"},"docker logs [container id]")," you will get following result:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-docker-logs",src:n(7758).Z})),(0,o.kt)("p",null,"execute ",(0,o.kt)("inlineCode",{parentName:"p"},"docker exec -it [container id] /bin/bash")," you will go into the container and see the details:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-docker-exec",src:n(4318).Z})),(0,o.kt)("h3",{id:"34-test"},"3.4 Test"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Prerequisite")," \uff1aRocketMQ Namesrv & Broker"),(0,o.kt)("p",null,"you can build the rocketmq image following  ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-docker"},"here")," or get the rocketmq image\nfrom docker hub."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'docker pull rocketmqinc/rocketmq-namesrv:4.5.0-alpine\ndocker pull rocketmqinc/rocketmq-broker:4.5.0-alpine\n\n#namesrv \ndocker run -d -p 9876:9876 -v `pwd` /data/namesrv/logs:/root/logs -v `pwd`/data/namesrv/store:/root/store --name rmqnamesrv  rocketmqinc/rocketmq-namesrv:4.5.0-alpine sh mqnamesrv \n\n#broker \ndocker run -d -p 10911:10911 -p 10909:10909 -v `pwd`/data/broker/logs:/root/logs -v `pwd`/data/broker/store:/root/store --name rmqbroker --link rmqnamesrv:namesrv -e "NAMESRV_ADDR=namesrv:9876" rocketmqinc/rocketmq-broker:4.5.0-alpine sh mqbroker -c ../conf/broker.conf\n')),(0,o.kt)("p",null,"When we get this point, ",(0,o.kt)("strong",{parentName:"p"},"rocketmq-broker ip")," is the ",(0,o.kt)("strong",{parentName:"p"},"pod ip"),", if you want to change the ip, you can mount the ",(0,o.kt)("strong",{parentName:"p"},"\nbroker.conf")," file in container and modify ",(0,o.kt)("strong",{parentName:"p"},"brokerIP1")," configuration in this file to your custom values."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.4.1 Run Demo")),(0,o.kt)("p",null,"Windows"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For demos running under the Windows , you can\nrefer ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/WeBankFinTech/EventMesh/blob/develop/docs/en/instructions/eventmesh-sdk-java-quickstart.md"},"here"))),(0,o.kt)("p",null,"Linux"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Get eventmesh-test_1.2.0-SNAPSHOT.tar.gz")),(0,o.kt)("p",{parentName:"li"},"you can get this package from ",(0,o.kt)("strong",{parentName:"p"},"our releases")," or ",(0,o.kt)("strong",{parentName:"p"},"build with source code"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"build with source code"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd /* Your Deploy Path */EventMesh/eventmesh-test \ngradle clean testdist testtar -x test`\n")),(0,o.kt)("p",{parentName:"li"},"you will get ",(0,o.kt)("strong",{parentName:"p"},"eventmesh-test_1.2.0-SNAPSHOT.tar.gz")," under the /eventmesh-test/build")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Modify configuration files")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"upload eventmesh-test_1.2.0-SNAPSHOT.tar.gz\ntar -zxvf eventmesh-test_1.2.0-SNAPSHOT.tar.gz\ncd conf\nconfig your application.properties\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Run demo")),(0,o.kt)("p",{parentName:"li"},"TCP Sub"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd bin\nsh tcp_sub.sh\n")),(0,o.kt)("p",{parentName:"li"},"TCP Pub"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd bin\nsh tcp_pub.sh\n")),(0,o.kt)("p",{parentName:"li"},"TCP Sub Broadcast"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd bin\nsh tcp_sub_broadcast.sh\n")),(0,o.kt)("p",{parentName:"li"},"TCP Pub Broadcast"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd bin\nsh tcp_pub_broadcast.sh\n")),(0,o.kt)("p",{parentName:"li"},"HTTP Sub"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd bin\nsh http_sub.sh\n")),(0,o.kt)("p",{parentName:"li"},"HTTP Pub"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd bin\nsh http_pub.sh\n")),(0,o.kt)("p",{parentName:"li"},"After this , you can see result of different mode in logs file under ",(0,o.kt)("inlineCode",{parentName:"p"},"/logs")," directory"))))}m.isMDXComponent=!0},4318:function(e,t,n){"use strict";t.Z=n.p+"assets/images/docker-exec-351e977e0084d8a6c7c77bc9248e824b.png"},4520:function(e,t){"use strict";t.Z="data:image/png;base64,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"},7758:function(e,t,n){"use strict";t.Z=n.p+"assets/images/docker-logs-29fa92c75352eeae3ab3300f8fd99f3c.png"},8387:function(e,t,n){"use strict";t.Z=n.p+"assets/images/docker-ps-79f7f604c6aff2100238247f898bdee2.png"},9899:function(e,t,n){"use strict";t.Z=n.p+"assets/images/project-structure-68e460417afc869023ca7e956ebd2680.png"}}]);