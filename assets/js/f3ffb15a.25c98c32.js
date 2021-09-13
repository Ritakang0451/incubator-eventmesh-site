(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[330],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return o},kt:function(){return N}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=s(t,["components","mdxType","originalType","parentName"]),d=p(n),N=r,c=d["".concat(m,".").concat(N)]||d[N]||u[N]||l;return n?a.createElement(c,i(i({ref:e},o),{},{components:n})):a.createElement(c,i({ref:e},o))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var m in e)hasOwnProperty.call(e,m)&&(s[m]=e[m]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},542:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return o},default:function(){return d}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=["components"],s={},m=void 0,p={unversionedId:"instructions/eventmesh-runtime-protocol",id:"instructions/eventmesh-runtime-protocol",isDocsHomePage:!1,title:"eventmesh-runtime-protocol",description:"TCP Protocol Document In Eventmesh-Runtime",source:"@site/docs/instructions/eventmesh-runtime-protocol.md",sourceDirName:"instructions",slug:"/instructions/eventmesh-runtime-protocol",permalink:"/docs/instructions/eventmesh-runtime-protocol",editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/instructions/eventmesh-runtime-protocol.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventMesh SPI",permalink:"/docs/features/spi.en-US"},next:{title:"Eventmesh-runtime Quick start Instruction",permalink:"/docs/instructions/eventmesh-runtime-quickstart"}},o=[{value:"TCP Protocol Document In Eventmesh-Runtime",id:"tcp-protocol-document-in-eventmesh-runtime",children:[]},{value:"HTTP Protocol Document In Eventmesh-Runtime",id:"http-protocol-document-in-eventmesh-runtime",children:[]}],u={toc:o};function d(t){var e=t.components,s=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"tcp-protocol-document-in-eventmesh-runtime"},"TCP Protocol Document In Eventmesh-Runtime"),(0,l.kt)("h4",{id:"1-protocol-format"},"1. Protocol Format"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"dataFlow",src:n(1263).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Protocol Specification")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Magic Code: 9 bit, defaultValue:EventMesh\n\nProtocol Version: 4 bit, defaultValue:0000\n\nMessage Size: 4 bit, the total length of message\n\nHeader Size: 4 bit\uff0cthe length of Message Header\n\nMessage Header: the specific header content of message \n\nMessage Body: the specific body content of message \n")),(0,l.kt)("h4",{id:"2-message-object-in-business-logic-layer"},"2. Message Object in business logic layer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Message Composition")),(0,l.kt)("p",null,"The class of ",(0,l.kt)("inlineCode",{parentName:"p"},"Package.java")," is message object in business logic layer. It contains two parts: header and body."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class Package {\n\n    private Header header;\n    private Object body;\n}\n\n\npublic class Header {\n\n    private Command cmd;\n    private int code;\n    private String msg;\n    private String seq;\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Specificatiion")),(0,l.kt)("p",null,"Message Header(header): The field of Command in Header, used to distinguishing different message types."),(0,l.kt)("p",null,"Message Body(body): The message body is defined as different objects according to the message type."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"type of Body"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HEARTBEAT_REQUEST, HEARTBEAT_RESPONSE, HELLO_RESPONSE, CLIENT_GOODBYE_REQUEST, CLIENT_GOODBYE_RESPONSE, SERVER_GOODBYE_REQUEST, SERVER_GOODBYE_RESPONSE, LISTEN_REQUEST, LISTEN_RESPONSE, UNSUBSCRIBE_REQUEST, SUBSCRIBE_RESPONSE, UNSUBSCRIBE_RESPONSE, ASYNC_MESSAGE_TO_SERVER_ACK, BROADCAST_MESSAGE_TO_SERVER_ACK"),(0,l.kt)("td",{parentName:"tr",align:null},"--")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HELLO_REQUEST"),(0,l.kt)("td",{parentName:"tr",align:null},"UserAgent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SUBSCRIBE_REQUEST"),(0,l.kt)("td",{parentName:"tr",align:null},"Subscription")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REQUEST_TO_SERVER, REQUEST_TO_CLIENT, RESPONSE_TO_SERVER, RESPONSE_TO_CLIENT, ASYNC_MESSAGE_TO_SERVER, ASYNC_MESSAGE_TO_CLIENT, BROADCAST_MESSAGE_TO_SERVER, BROADCAST_MESSAGE_TO_CLIENT, ASYNC_MESSAGE_TO_CLIENT_ACK, BROADCAST_MESSAGE_TO_CLIENT_ACK, RESPONSE_TO_CLIENT_ACK, REQUEST_TO_CLIENT_ACK"),(0,l.kt)("td",{parentName:"tr",align:null},"OpenMessage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REDIRECT_TO_CLIENT"),(0,l.kt)("td",{parentName:"tr",align:null},"RedirectInfo")))),(0,l.kt)("h4",{id:"3-the-interactive-command-between-client-and-servereventmesh-runtime"},"3. The Interactive Command between Client and Server(Eventmesh-Runtime)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public enum Command {\n\n    //HeartBeat\n    HEARTBEAT_REQUEST(0),                              //client send heartbeat request to server\n    HEARTBEAT_RESPONSE(1),                             //server reply heartbeat response to client\n\n    //Hello\n    HELLO_REQUEST(2),                                  //client send connect request to server\n    HELLO_RESPONSE(3),                                 //server reply connect response to client\n\n    //Disconncet\n    CLIENT_GOODBYE_REQUEST(4),                         //client send disconnect request to server\n    CLIENT_GOODBYE_RESPONSE(5),                        //server reply disconnect response to client\n    SERVER_GOODBYE_REQUEST(6),                         //server send disconncet request to client\n    SERVER_GOODBYE_RESPONSE(7),                        //client reply disconnect response to server\n\n    //Subscribe and UnSubscribe\n    SUBSCRIBE_REQUEST(8),                              //client send subscribe request to server\n    SUBSCRIBE_RESPONSE(9),                             //server reply subscribe response to client\n    UNSUBSCRIBE_REQUEST(10),                           //client send unsubscribe request to server\n    UNSUBSCRIBE_RESPONSE(11),                          //server reply unsubscribe response to client\n\n    //Listen\n    LISTEN_REQUEST(12),                                //client send listen request to server\n    LISTEN_RESPONSE(13),                               //server reply listen response to client\n\n    //send sync message\n    REQUEST_TO_SERVER(14),                             //client(Producer) send sync msg to server\n    REQUEST_TO_CLIENT(15),                             //server push sync msg to client(Consumer)\n    REQUEST_TO_CLIENT_ACK(16),                         //client(Consumer) send ack of sync msg to server\n    RESPONSE_TO_SERVER(17),                            //client(Consumer) send reply msg to server\n    RESPONSE_TO_CLIENT(18),                            //server push reply msg to client(Producer)\n    RESPONSE_TO_CLIENT_ACK(19),                        //client(Producer) send ack of reply msg to server\n\n    //send async message\n    ASYNC_MESSAGE_TO_SERVER(20),                       //client send async msg to server\n    ASYNC_MESSAGE_TO_SERVER_ACK(21),                   //server reply ack of async msg to client\n    ASYNC_MESSAGE_TO_CLIENT(22),                       //server push async msg to client\n    ASYNC_MESSAGE_TO_CLIENT_ACK(23),                   //client reply ack of async msg to server\n\n    //send broadcast message\n    BROADCAST_MESSAGE_TO_SERVER(24),                   //client send broadcast msg to server\n    BROADCAST_MESSAGE_TO_SERVER_ACK(25),               //server reply ack of broadcast msg to client\n    BROADCAST_MESSAGE_TO_CLIENT(26),                   //server push broadcast msg to client\n    BROADCAST_MESSAGE_TO_CLIENT_ACK(27),               //client reply ack of broadcast msg to server\n\n    //redirect\n    REDIRECT_TO_CLIENT(30),                            //server send redirect instruction to client\n}\n")),(0,l.kt)("h4",{id:"4-client-initiates-interaction"},"4. Client initiates interaction"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Scene"),(0,l.kt)("th",{parentName:"tr",align:null},"Client Send"),(0,l.kt)("th",{parentName:"tr",align:null},"Server Reply"),(0,l.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hello"),(0,l.kt)("td",{parentName:"tr",align:null},"HELLO_REQUEST"),(0,l.kt)("td",{parentName:"tr",align:null},"HELLO_RESPONSE"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Heartbeat"),(0,l.kt)("td",{parentName:"tr",align:null},"HEARTBEAT_REQUEST"),(0,l.kt)("td",{parentName:"tr",align:null},"HEARTBEAT_RESPONSE"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Subscribe"),(0,l.kt)("td",{parentName:"tr",align:null},"SUBSCRIBE_REQUEST"),(0,l.kt)("td",{parentName:"tr",align:null},"SUBSCRIBE_RESPONSE"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unsubscribe"),(0,l.kt)("td",{parentName:"tr",align:null},"UNSUBSCRIBE_REQUEST"),(0,l.kt)("td",{parentName:"tr",align:null},"UNSUBSCRIBE_RESPONSE"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Listen"),(0,l.kt)("td",{parentName:"tr",align:null},"LISTEN_REQUEST"),(0,l.kt)("td",{parentName:"tr",align:null},"LISTEN_RESPONSE"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Send sync msg"),(0,l.kt)("td",{parentName:"tr",align:null},"REQUEST_TO_SERVER"),(0,l.kt)("td",{parentName:"tr",align:null},"RESPONSE_TO_CLIENT"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Send reply msg of sync msg"),(0,l.kt)("td",{parentName:"tr",align:null},"RESPONSE_TO_SERVER"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Send async msg"),(0,l.kt)("td",{parentName:"tr",align:null},"ASYNC_MESSAGE_TO_SERVER"),(0,l.kt)("td",{parentName:"tr",align:null},"ASYNC_MESSAGE_TO_SERVER_ACK"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Send broadcast msg"),(0,l.kt)("td",{parentName:"tr",align:null},"BROADCAST_MESSAGE_TO_SERVER"),(0,l.kt)("td",{parentName:"tr",align:null},"BROADCAST_MESSAGE_TO_SERVER_ACK"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Client start disconnect"),(0,l.kt)("td",{parentName:"tr",align:null},"CLIENT_GOODBYE_REQUEST"),(0,l.kt)("td",{parentName:"tr",align:null},"CLIENT_GOODBYE_RESPONSE"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"5-server-initiates-interaction"},"5. Server initiates interaction"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Scene"),(0,l.kt)("th",{parentName:"tr",align:null},"Server Send"),(0,l.kt)("th",{parentName:"tr",align:null},"Client Reply"),(0,l.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Push sync msg to client"),(0,l.kt)("td",{parentName:"tr",align:null},"REQUEST_TO_CLIENT"),(0,l.kt)("td",{parentName:"tr",align:null},"REQUEST_TO_CLIENT_ACK"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Push reply msg of sync msg to client"),(0,l.kt)("td",{parentName:"tr",align:null},"RESPONSE_TO_CLIENT"),(0,l.kt)("td",{parentName:"tr",align:null},"RESPONSE_TO_CLIENT_ACK"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Push async msg to client"),(0,l.kt)("td",{parentName:"tr",align:null},"ASYNC_MESSAGE_TO_CLIENT"),(0,l.kt)("td",{parentName:"tr",align:null},"ASYNC_MESSAGE_TO_CLIENT_ACK"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Push broadcast msg to client"),(0,l.kt)("td",{parentName:"tr",align:null},"BROADCAST_MESSAGE_TO_CLIENT"),(0,l.kt)("td",{parentName:"tr",align:null},"BROADCAST_MESSAGE_TO_CLIENT_ACK"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Server start disconnect"),(0,l.kt)("td",{parentName:"tr",align:null},"SERVER_GOODBYE_REQUEST"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Server send redirect"),(0,l.kt)("td",{parentName:"tr",align:null},"REDIRECT_TO_CLIENT"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"6-message-classification"},"6. Message classification"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Send sync msg")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"rr-msg",src:n(9987).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Send async msg")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"async-msg",src:n(4379).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Send broadcast msg")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"broadcast-msg",src:n(5879).Z})),(0,l.kt)("h2",{id:"http-protocol-document-in-eventmesh-runtime"},"HTTP Protocol Document In Eventmesh-Runtime"),(0,l.kt)("p",null,"The class of ",(0,l.kt)("inlineCode",{parentName:"p"},"LiteMessage.java")," is message definition in http protocal of EventMesh-Runtime.If you want to send msg by\nusing http protocol,you can use client in eventmesh-sdk-java, and you just need care the specific protocol in the field\nof content."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class LiteMessage {\n\n    private String bizSeqNo;\n\n    private String uniqueId;\n\n    private String topic;\n\n    private String content;\n\n    private Map<String, String> prop;\n\n    private long createTime = System.currentTimeMillis();\n}\n")),(0,l.kt)("h4",{id:"1-message-send-and-message-composition"},"1. Message Send and Message Composition"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request Method"),": POST"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Message Composition"),": RequestHeader + RequestBody"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Heartbeat Msg")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"RequestHeader")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Env"),(0,l.kt)("td",{parentName:"tr",align:null},"Enviroment of Client")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Region"),(0,l.kt)("td",{parentName:"tr",align:null},"Region of Client")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Idc"),(0,l.kt)("td",{parentName:"tr",align:null},"IDC of Client")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dcn"),(0,l.kt)("td",{parentName:"tr",align:null},"DCN of Client")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Sys"),(0,l.kt)("td",{parentName:"tr",align:null},"Subsystem ID of Client")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pid"),(0,l.kt)("td",{parentName:"tr",align:null},"Client Process ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ip"),(0,l.kt)("td",{parentName:"tr",align:null},"Client Ip")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Username"),(0,l.kt)("td",{parentName:"tr",align:null},"Client username")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Passwd"),(0,l.kt)("td",{parentName:"tr",align:null},"Client password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Version"),(0,l.kt)("td",{parentName:"tr",align:null},"Protocol version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Language"),(0,l.kt)("td",{parentName:"tr",align:null},"Develop language")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Code"),(0,l.kt)("td",{parentName:"tr",align:null},"Request Code")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"RequestBody")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clientType"),(0,l.kt)("td",{parentName:"tr",align:null},"Producer:clientType is ClientType.PUB,Consumer:clientType is ClientType.SUB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"heartbeatEntities"),(0,l.kt)("td",{parentName:"tr",align:null},"Heartbeat content,contains topic,url...")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Subscribe Msg")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"RequestHeader")),(0,l.kt)("p",null,"same with RequestHeader of heartbeat msg"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"RequestBody")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topic"),(0,l.kt)("td",{parentName:"tr",align:null},"topic of client want to subscribe")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"url of client, server push msg to the url when receiving msg from other components")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Unsubscribe Msg")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"RequestHeader")),(0,l.kt)("p",null,"same with RequestHeader of Heartbeat Msg"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"RequestBody")),(0,l.kt)("p",null,"same with RequestBody of Subscribe Msg"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Send async msg")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"RequestHeader")),(0,l.kt)("p",null,"same with RequestHeader of Heartbeat Msg"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"RequestBody")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topic"),(0,l.kt)("td",{parentName:"tr",align:null},"topic of msg")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"content"),(0,l.kt)("td",{parentName:"tr",align:null},"msg content")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ttl"),(0,l.kt)("td",{parentName:"tr",align:null},"timeout time of  msg")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bizSeqNo"),(0,l.kt)("td",{parentName:"tr",align:null},"biz sequence number of msg")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uniqueId"),(0,l.kt)("td",{parentName:"tr",align:null},"unique mark of msg")))),(0,l.kt)("h4",{id:"2-client-initiates-interaction"},"2. Client initiates interaction"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Scene"),(0,l.kt)("th",{parentName:"tr",align:null},"Client Send"),(0,l.kt)("th",{parentName:"tr",align:null},"Server Reply"),(0,l.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Heartbeat"),(0,l.kt)("td",{parentName:"tr",align:null},"HEARTBEAT(203)"),(0,l.kt)("td",{parentName:"tr",align:null},"SUCCESS(0)/EVENTMESH_HEARTBEAT_ERROR(19)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Subscribe"),(0,l.kt)("td",{parentName:"tr",align:null},"SUBSCRIBE(206)"),(0,l.kt)("td",{parentName:"tr",align:null},"SUCCESS(0)/EVENTMESH_SUBSCRIBE_ERROR(17)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unsubscribe"),(0,l.kt)("td",{parentName:"tr",align:null},"UNSUBSCRIBE(207)"),(0,l.kt)("td",{parentName:"tr",align:null},"SUCCESS(0)/EVENTMESH_UNSUBSCRIBE_ERROR(18)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Send async msg"),(0,l.kt)("td",{parentName:"tr",align:null},"MSG_SEND_ASYNC(104)"),(0,l.kt)("td",{parentName:"tr",align:null},"SUCCESS(0)/EVENTMESH_SEND_ASYNC_MSG_ERR(14)"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"3-server-initiates-interaction"},"3. Server initiates interaction"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Scene"),(0,l.kt)("th",{parentName:"tr",align:null},"Server Send"),(0,l.kt)("th",{parentName:"tr",align:null},"Client Reply"),(0,l.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Push async msg to client"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP_PUSH_CLIENT_ASYNC(105)"),(0,l.kt)("td",{parentName:"tr",align:null},"retCode"),(0,l.kt)("td",{parentName:"tr",align:null},"retCode=0,send success")))))}d.isMDXComponent=!0},4379:function(t,e,n){"use strict";e.Z=n.p+"assets/images/eventmesh-async-msg-628b4635b65593b1f2e6d8fbd7c0a38f.png"},5879:function(t,e,n){"use strict";e.Z=n.p+"assets/images/eventmesh-broadcast-msg-d3d27b42c2c0c80a39362fb706e184f8.png"},9987:function(t,e,n){"use strict";e.Z=n.p+"assets/images/eventmesh-rr-msg-6ef285bf8186ea210cdf95f6f6cfa593.png"},1263:function(t,e){"use strict";e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtEAAAApCAYAAADzl3VaAAAEjHRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMkVsZWN0cm9uJTIyJTIwbW9kaWZpZWQlM0QlMjIyMDIxLTAzLTA1VDA2JTNBMzklM0ExNC40ODlaJTIyJTIwYWdlbnQlM0QlMjI1LjAlMjAoV2luZG93cyUyME5UJTIwMTAuMCUzQiUyMFdpbjY0JTNCJTIweDY0KSUyMEFwcGxlV2ViS2l0JTJGNTM3LjM2JTIwKEtIVE1MJTJDJTIwbGlrZSUyMEdlY2tvKSUyMGRyYXcuaW8lMkYxMi45LjklMjBDaHJvbWUlMkY4MC4wLjM5ODcuMTYzJTIwRWxlY3Ryb24lMkY4LjIuMSUyMFNhZmFyaSUyRjUzNy4zNiUyMiUyMGV0YWclM0QlMjJPejZHcWxGUExHd0t6ME5IZUVuQiUyMiUyMHZlcnNpb24lM0QlMjIxMi45LjklMjIlMjB0eXBlJTNEJTIyZGV2aWNlJTIyJTNFJTNDZGlhZ3JhbSUyMGlkJTNEJTIyVlNuSnNDWmhHaDNhejZtbzh5eTclMjIlMjBuYW1lJTNEJTIyUGFnZS0yJTIyJTNFM1paUmI1c3dFSUIlMkZEWSUyQlZES2FFdnBaa2l5SlZuWVRVU1gxejhBV3NBSWVNS2RCZlB4Tk1nTkZWNjdRMVdwNkN2N1BQdWMlMkJIaFVXRHJQa3FXWkU4SUlmVWNnaHZMTHEySE1kMkhWZiUyRmRLVHRpZCUyQk5PaEJMd2Mya0VZVGlGUXdraGxhQ1F6bWJxQkJUSllvNWpERFBJVkl6eHFURWVqN3RnT2w4MTRMRnNBQmh4TklsJTJGUzY0U29ZcVZpUGZnb2lUWVdmYnUlMkJzakdSc21tMHJLaEhHc0o0aHVMQnBJUk5VJTJGWlUwQWFTZHY4QktBJTJGUnp1eVRyaHR2OTg2MFJ0dmlsdiUyQm1SZlByTGtYSUtFWFAxeDZuRDNXcjNROWFaNjNPNzhwM0NIeCUyQlBqamRlbmZtRnBaWHlaV2xVN0NJd2xWb1ZGN3c4aVRRTk1VWjR3UFJ6QWl5TE5TeVh4Q0pNSVg5M3RDZEVSa3h1a2d1YXRzMmI3WVElMkZ5bXhYYVolMkIyNlh3RXpVTExWNjB4MjM2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"}}]);