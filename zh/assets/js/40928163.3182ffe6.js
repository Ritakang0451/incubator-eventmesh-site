"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[9901],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return t?o.createElement(m,i(i({ref:n},p),{},{components:t})):o.createElement(m,i({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3497:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],s={},c="TCP Protocol",l={unversionedId:"sdk-java/tcp",id:"sdk-java/tcp",title:"TCP Protocol",description:"EventMesh SDK for Java implements the TCP producer and consumer of synchronous, asynchronous, and broadcast messages. Both the producer and consumer require an instance of EventMeshTCPClientConfig class that specifies the configuration of EventMesh gRPC client. The host and port fields should match the eventmesh.properties file of EventMesh runtime.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/sdk-java/03-tcp.md",sourceDirName:"sdk-java",slug:"/sdk-java/tcp",permalink:"/zh/docs/sdk-java/tcp",draft:!1,editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/sdk-java/03-tcp.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTTP Protocol",permalink:"/zh/docs/sdk-java/http"},next:{title:"gRPC Protocol",permalink:"/zh/docs/sdk-java/grpc"}},p={},u=[{value:"TCP Consumer",id:"tcp-consumer",level:2},{value:"TCP Producer",id:"tcp-producer",level:2},{value:"Asynchronous Producer",id:"asynchronous-producer",level:3},{value:"Synchronous Producer",id:"synchronous-producer",level:3}],d={toc:u};function h(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tcp-protocol"},"TCP Protocol"),(0,a.kt)("p",null,"EventMesh SDK for Java implements the TCP producer and consumer of synchronous, asynchronous, and broadcast messages. Both the producer and consumer require an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"EventMeshTCPClientConfig")," class that specifies the configuration of EventMesh gRPC client. The ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"port")," fields should match the ",(0,a.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," file of EventMesh runtime."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import org.apache.eventmesh.client.tcp.conf.EventMeshTCPClientConfig;\nimport org.apache.eventmesh.client.tcp.common.ReceiveMsgHook;\nimport io.cloudevents.CloudEvent;\n\npublic class AsyncSubscribe implements ReceiveMsgHook<CloudEvent> {\n  public static void main(String[] args) throws InterruptedException {\n    EventMeshTCPClientConfig eventMeshTcpClientConfig = EventMeshTCPClientConfig.builder()\n      .host(eventMeshIp)\n      .port(eventMeshTcpPort)\n      .userAgent(userAgent)\n      .build();\n    /* ... */\n  }\n}\n")),(0,a.kt)("h2",{id:"tcp-consumer"},"TCP Consumer"),(0,a.kt)("p",null,"The consumer should implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"ReceiveMsgHook")," class, which is defined in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh/blob/master/eventmesh-sdk-java/src/main/java/org/apache/eventmesh/client/tcp/common/ReceiveMsgHook.java"},(0,a.kt)("inlineCode",{parentName:"a"},"ReceiveMsgHook.java")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface ReceiveMsgHook<ProtocolMessage> {\n  Optional<ProtocolMessage> handle(ProtocolMessage msg);\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"EventMeshTCPClient")," class implements the ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe")," method. The ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe")," method accepts the topic, the ",(0,a.kt)("inlineCode",{parentName:"p"},"SubscriptionMode"),", and the ",(0,a.kt)("inlineCode",{parentName:"p"},"SubscriptionType"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"handle")," method will be invoked when the consumer receives a message from the topic it subscribes. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"SubscriptionType")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"SYNC"),", the return value of ",(0,a.kt)("inlineCode",{parentName:"p"},"handle")," will be sent back to the producer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.eventmesh.client.tcp.EventMeshTCPClient;\nimport org.apache.eventmesh.client.tcp.EventMeshTCPClientFactory;\nimport org.apache.eventmesh.client.tcp.common.ReceiveMsgHook;\nimport org.apache.eventmesh.common.protocol.SubscriptionMode;\nimport org.apache.eventmesh.common.protocol.SubscriptionType;\nimport io.cloudevents.CloudEvent;\n\npublic class TCPConsumer implements ReceiveMsgHook<CloudEvent> {\n  public static TCPConsumer handler = new TCPConsumer();\n  private static EventMeshTCPClient<CloudEvent> client;\n\n  public static void main(String[] args) throws Exception {\n    client = EventMeshTCPClientFactory.createEventMeshTCPClient(\n      eventMeshTcpClientConfig,\n      CloudEvent.class\n    );\n    client.init();\n\n    client.subscribe(\n      "eventmesh-sync-topic",\n      SubscriptionMode.CLUSTERING,\n      SubscriptionType.SYNC\n    );\n\n    client.registerSubBusiHandler(handler);\n    client.listen();\n  }\n\n  @Override\n  public Optional<CloudEvent> handle(CloudEvent message) {\n    log.info("Messaged received: {}", message);\n    return Optional.of(message);\n  }\n}\n')),(0,a.kt)("h2",{id:"tcp-producer"},"TCP Producer"),(0,a.kt)("h3",{id:"asynchronous-producer"},"Asynchronous Producer"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"EventMeshTCPClient")," class implements the ",(0,a.kt)("inlineCode",{parentName:"p"},"publish")," method. The ",(0,a.kt)("inlineCode",{parentName:"p"},"publish")," method accepts the message to be published and an optional timeout value and returns the response message from the consumer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'/* ... */\nclient = EventMeshTCPClientFactory.createEventMeshTCPClient(eventMeshTcpClientConfig, CloudEvent.class);\nclient.init();\n\nCloudEvent event = CloudEventBuilder.v1()\n  .withId(UUID.randomUUID().toString())\n  .withSubject(ExampleConstants.EVENTMESH_GRPC_ASYNC_TEST_TOPIC)\n  .withSource(URI.create("/"))\n  .withDataContentType(ExampleConstants.CLOUDEVENT_CONTENT_TYPE)\n  .withType(EventMeshCommon.CLOUD_EVENTS_PROTOCOL_NAME)\n  .withData(JsonUtils.serialize(content).getBytes(StandardCharsets.UTF_8))\n  .withExtension(Constants.EVENTMESH_MESSAGE_CONST_TTL, String.valueOf(4 * 1000))\n  .build();\nclient.publish(event, 1000);\n')),(0,a.kt)("h3",{id:"synchronous-producer"},"Synchronous Producer"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"EventMeshTCPClient")," class implements the ",(0,a.kt)("inlineCode",{parentName:"p"},"rr")," method. The ",(0,a.kt)("inlineCode",{parentName:"p"},"rr")," method accepts the message to be published and an optional timeout value and returns the response message from the consumer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'/* ... */\nclient = EventMeshTCPClientFactory.createEventMeshTCPClient(eventMeshTcpClientConfig, CloudEvent.class);\nclient.init();\n\nCloudEvent event = CloudEventBuilder.v1()\n  .withId(UUID.randomUUID().toString())\n  .withSubject(ExampleConstants.EVENTMESH_GRPC_ASYNC_TEST_TOPIC)\n  .withSource(URI.create("/"))\n  .withDataContentType(ExampleConstants.CLOUDEVENT_CONTENT_TYPE)\n  .withType(EventMeshCommon.CLOUD_EVENTS_PROTOCOL_NAME)\n  .withData(JsonUtils.serialize(content).getBytes(StandardCharsets.UTF_8))\n  .withExtension(Constants.EVENTMESH_MESSAGE_CONST_TTL, String.valueOf(4 * 1000))\n  .build();\n\nPackage response = client.rr(event, 1000);\nCloudEvent replyEvent = EventFormatProvider\n  .getInstance()\n  .resolveFormat(JsonFormat.CONTENT_TYPE)\n  .deserialize(response.getBody().toString().getBytes(StandardCharsets.UTF_8));\n')))}h.isMDXComponent=!0}}]);