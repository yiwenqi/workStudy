## 网络基础--HTTP 深入研究

### HTTP 概述(超文本传输协议)

HTTP是一种能够获取如HTML这样的网络资源的`protocol`（通讯协议）。他是在Web上进行数据交换的基础，是一种client-server协议。

![image-20220216144936952](https://raw.githubusercontent.com/yiwenqi/cloudimg/main/data/image-20220216144936952.png)

HTTP被设计于20世纪90年代初期，是一种可扩展的协议。它是应用层的协议，通过[TCP](https://developer.mozilla.org/zh-CN/docs/Glossary/TCP)，或者是[TLS](https://developer.mozilla.org/zh-CN/docs/Glossary/TLS)－加密的TCP连接来发送，理论上任何可靠的传输协议都可以使用。因为其良好的扩展性，时至今日，它不仅被用来传输超文本文档，还用来传输图片、视频或者向服务器发送如HTML表单这样的信息。

#### 基于HTTP的组件系统

HTTP是一个client-server协议：请求通过一个实体被发出，实体也就是用户代理。大多数情况下，这个用户代理都是指浏览器，当然它也可能是任何东西，比如一个爬取网页生成维护搜索引擎索引的机器爬虫。



### 跨域资源共享（CORS）

### HTTP headers

http消息头允许客户端和服务端通过request,response传递附加信息，一个请求头又名称后跟一个冒号":",冒号后跟一个具体的值组成。该值前面的引导空白会被忽略。

**根据不同的上下文，可将消息头分为：**

- General headers : 同时适用于请求和响应消息，但与最终消息主题中传输的数据无关的消息头。
- Request headers：包含更多有关要获取的资源或客户端本身的消息头
- Response headers: 包含有关相应的补充信息，如其位置或者服务器本身的消息头
- Entity headers : 包含有关实体主体的更多信息，比如主体长(Content-Length)度或其MIME类型。

**消息头也可以根据代理对其的处理方式分为：**

**端到端消息头：**

这类消息必须传输到最终的消息接受者，即，请求的服务器或响应的客户端。中间的代理服务器必须转发未经修改的端到端消息头，并且必须缓存它。

**逐跳消息头：**

这类消息头仅对单词传输连接有意义，不能通过代理或者缓存进行重新转发。这些消息头包括：Connection，Keep-Alive，Proxy-Authenticate，Proxy-Authorization，TE，Trailer，Transfer-Encoding和Upgrade(en-US)。注意，只能使用Connection来设置逐级跳一般头。

以下清单概括了消息头及其用途：

| 消息头                             | 描述                                                         | 更多信息                                                     | 标准                                                         | 示例                                                         |
| :--------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | ------------------------------------------------------------ |
| `Accept`                           | 用户代理期望的MIME 类型列表                                  | [HTTP Content Negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation) | HTTP/1.1                                                     | text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8<br />https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values#default_values |
| `Accept-CH`                        | 列出配置数据，服务器可据此来选择适当的响应。                 | [HTTP Client Hints](http://igrigorik.github.io/http-client-hints) |                                                              |                                                              |
| `Accept-Charset`                   | 列出用户代理支持的字符集。                                   | [HTTP Content Negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation) | HTTP/1.1                                                     |                                                              |
| `Accept-Features`                  |                                                              | [HTTP Content Negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation) | RFC 2295, §8.2                                               |                                                              |
| `Accept-Encoding`                  | 列出用户代理支持的压缩方法。                                 | [HTTP Content Negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation) | HTTP/1.1                                                     |                                                              |
| `Accept-Language`                  | 列出用户代理期望的页面语言。                                 | [HTTP Content Negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation) | HTTP/1.1                                                     |                                                              |
| `Accept-Ranges`                    |                                                              |                                                              |                                                              |                                                              |
| `Access-Control-Allow-Credentials` |                                                              | [HTTP Access Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) and [Server Side Access Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) | [W3C Cross-Origin Resource Sharing](https://www.w3.org/TR/cors/) |                                                              |
| `Access-Control-Allow-Origin`      |                                                              | [HTTP Access Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) and [Server Side Access Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) | [W3C Cross-Origin Resource Sharing](https://www.w3.org/TR/cors/) |                                                              |
| `Access-Control-Allow-Methods`     |                                                              | [HTTP Access Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) and [Server Side Access Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) | [W3C Cross-Origin Resource Sharing](https://www.w3.org/TR/cors/) |                                                              |
| `Access-Control-Allow-Headers`     |                                                              | [HTTP Access Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) and [Server Side Access Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) | [W3C Cross-Origin Resource Sharing](https://www.w3.org/TR/cors/) |                                                              |
| `Access-Control-Max-Age`           |                                                              | [HTTP Access Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) and [Server Side Access Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) | [W3C Cross-Origin Resource Sharing](https://www.w3.org/TR/cors/) |                                                              |
| `Access-Control-Expose-Headers`    |                                                              | [HTTP Access Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) and [Server Side Access Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) | [W3C Cross-Origin Resource Sharing](https://www.w3.org/TR/cors/) |                                                              |
| `Access-Control-Request-Method`    |                                                              | [HTTP Access Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) and [Server Side Access Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) | [W3C Cross-Origin Resource Sharing](https://www.w3.org/TR/cors/) |                                                              |
| `Access-Control-Request-Headers`   |                                                              | [HTTP Access Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) and [Server Side Access Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) | [W3C Cross-Origin Resource Sharing](https://www.w3.org/TR/cors/) |                                                              |
| `Age`                              |                                                              |                                                              |                                                              |                                                              |
| `Allow`                            |                                                              |                                                              |                                                              |                                                              |
| `Alternates`                       |                                                              | [HTTP Content Negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation) | RFC 2295, §8.3                                               |                                                              |
| `Authorization`                    | 包含用服务器验证用户代理的凭证                               |                                                              |                                                              |                                                              |
| `Cache-Control`                    |                                                              | [HTTP Caching FAQ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching) |                                                              |                                                              |
| `Connection`                       |                                                              |                                                              |                                                              |                                                              |
| `Content-Encoding`                 |                                                              |                                                              |                                                              |                                                              |
| `Content-Language`                 |                                                              |                                                              |                                                              |                                                              |
| `Content-Length`                   |                                                              |                                                              |                                                              |                                                              |
| `Content-Location`                 |                                                              |                                                              |                                                              |                                                              |
| `Content-MD5`                      |                                                              | **未实现 (查看 [bug 232030](https://bugzilla.mozilla.org/show_bug.cgi?id=232030))** |                                                              |                                                              |
| `Content-Range`                    |                                                              |                                                              |                                                              |                                                              |
| `Content-Security-Policy`          | 控制用户代理在一个页面上可以加载使用的资源。                 | [CSP (Content Security Policy)](https://developer.mozilla.org/en-US/Security/CSP) | [W3C Content Security Policy](https://www.w3.org/TR/CSP2/)   |                                                              |
| `Content-Type`                     | 指示服务器文档的MIME 类型。帮助用户代理（浏览器）去处理接收到的数据。 |                                                              |                                                              |                                                              |
| `Cookie`                           |                                                              |                                                              | [RFC 2109](https://www.ietf.org/rfc/rfc2109.txt)             |                                                              |
| `DNT`                              | 设置该值为1， 表明用户明确退出任何形式的网上跟踪。           | Supported by Firefox 4, Firefox 5 for mobile, IE9, and a few major companies. | [Tracking Preference Expression (DNT)](https://www.w3.org/TR/tracking-dnt/) |                                                              |
| `Date`                             |                                                              |                                                              |                                                              |                                                              |
| `ETag`                             |                                                              | [HTTP Caching FAQ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching) |                                                              |                                                              |
| `Expect`                           |                                                              |                                                              |                                                              |                                                              |
| `Expires`                          |                                                              | [HTTP Caching FAQ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching) |                                                              |                                                              |
| `From`                             |                                                              |                                                              |                                                              |                                                              |
| `Host`                             |                                                              |                                                              |                                                              |                                                              |
| `If-Match`                         |                                                              |                                                              |                                                              |                                                              |
| `If-Modified-Since`                |                                                              | [HTTP Caching FAQ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching) |                                                              |                                                              |
| `If-None-Match`                    |                                                              | [HTTP Caching FAQ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching) |                                                              |                                                              |
| `If-Range`                         |                                                              |                                                              |                                                              |                                                              |
| `If-Unmodified-Since`              |                                                              |                                                              |                                                              |                                                              |
| `Last-Event-ID`                    | 给出服务器在先前HTTP连接上接收的最后事件的ID。用于同步文本/事件流。 | [Server-Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) | [Server-Sent Events spec](https://dev.w3.org/html5/eventsource/) |                                                              |
| `Last-Modified`                    |                                                              | [HTTP Caching FAQ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching) |                                                              |                                                              |
| `Link`                             | 等同于HTML标签中的"link"，但它是在HTTP层上，给出一个与获取的资源相关的URL以及关系的种类。 | For the `rel=prefetch` case, see [Link Prefetching FAQ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ) | Introduced in [HTTP 1.1's RFC 2068, section 19.6.2.4](https://tools.ietf.org/html/rfc2068#section-19.6.2.4), it was removed in the final [HTTP 1.1 spec](https://www.w3.org/Protocols/rfc2616/rfc2616.html), then reintroduced, with some extensions, in [RFC 5988](http://greenbytes.de/tech/webdav/rfc5988.html) |                                                              |
| `Location`                         |                                                              |                                                              |                                                              |                                                              |
| `Max-Forwards`                     |                                                              |                                                              |                                                              |                                                              |
| `Negotiate`                        |                                                              | [HTTP Content Negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation) | RFC 2295, §8.4                                               |                                                              |
| `Origin`                           |                                                              | [HTTP Access Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) and [Server Side Access Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) | More recently defined in the [Fetch spec](https://fetch.spec.whatwg.org/#http-extensions) (see [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).) Originally defined in [W3C Cross-Origin Resource Sharing](https://www.w3.org/TR/cors/) |                                                              |
| `Pragma`                           |                                                              | for the pragma: nocache value see [HTTP Caching FAQ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching) |                                                              |                                                              |
| `Proxy-Authenticate`               |                                                              |                                                              |                                                              |                                                              |
| `Proxy-Authorization`              |                                                              |                                                              |                                                              |                                                              |
| `Range`                            |                                                              |                                                              |                                                              |                                                              |
| `Referer`                          | （请注意，在HTTP / 0.9规范中引入的正交错误必须在协议的后续版本中保留） |                                                              |                                                              |                                                              |
| `Retry-After`                      |                                                              |                                                              |                                                              |                                                              |
| `Sec-Websocket-Extensions`         |                                                              |                                                              | [Websockets](https://tools.ietf.org/html/draft-ietf-hybi-thewebsocketprotocol-07) |                                                              |
| `Sec-Websocket-Key`                |                                                              |                                                              | [Websockets](https://tools.ietf.org/html/draft-ietf-hybi-thewebsocketprotocol-07) |                                                              |
| `Sec-Websocket-Origin`             |                                                              |                                                              | [Websockets](https://tools.ietf.org/html/draft-ietf-hybi-thewebsocketprotocol-07) |                                                              |
| `Sec-Websocket-Protocol`           |                                                              |                                                              | [Websockets](https://tools.ietf.org/html/draft-ietf-hybi-thewebsocketprotocol-07) |                                                              |
| `Sec-Websocket-Version`            |                                                              |                                                              | [Websockets](https://tools.ietf.org/html/draft-ietf-hybi-thewebsocketprotocol-07) |                                                              |
| `Server`                           |                                                              |                                                              |                                                              |                                                              |
| `Set-Cookie`                       |                                                              |                                                              | [RFC 2109](https://www.ietf.org/rfc/rfc2109.txt)             |                                                              |
| `Set-Cookie2`                      |                                                              |                                                              | [RFC 2965](https://www.ietf.org/rfc/rfc2965.txt)             |                                                              |
| `Strict-Transport-Security`        |                                                              | [HTTP Strict Transport Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) | [IETF reference](https://tools.ietf.org/html/draft-hodges-strict-transport-sec-02) |                                                              |
| `TCN`                              |                                                              | [HTTP Content Negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation) | RFC 2295, §8.5                                               |                                                              |
| `TE`                               |                                                              |                                                              |                                                              |                                                              |
| `Trailer`                          | 列出将在消息正文之后在尾部块中传输的头。这允许服务器计算一些值，如Content-MD5：在传输数据时。请注意，Trailer：标头不得列出Content-Length :, Trailer：或Transfer-Encoding：headers。 |                                                              | [RFC 2616, §14.40](https://tools.ietf.org/html/rfc2616#section-14.40) |                                                              |
| `Transfer-Encoding`                |                                                              |                                                              |                                                              |                                                              |
| `Upgrade`                          |                                                              |                                                              |                                                              |                                                              |
| `User-Agent`                       |                                                              | for Gecko's user agents see the [User Agents Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent/Firefox) |                                                              |                                                              |
| `Variant-Vary`                     |                                                              | [HTTP Content Negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation) | RFC 2295, §8.6                                               |                                                              |
| `Vary`                             | 列出了用作Web服务器选择特定内容的条件的标头。此服务器对于高效和正确缓存发送的资源很重要。 | [HTTP Content Negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation) & [HTTP Caching FAQ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching) |                                                              |                                                              |
| `Via`                              |                                                              |                                                              |                                                              |                                                              |
| `Warning`                          |                                                              |                                                              |                                                              |                                                              |
| `WWW-Authenticate`                 |                                                              |                                                              |                                                              |                                                              |
| `X-Content-Duration`               |                                                              | [Configuring servers for Ogg media](https://developer.mozilla.org/en-US/docs/Web/HTTP/Configuring_servers_for_Ogg_media) |                                                              |                                                              |
| `X-Content-Security-Policy`        |                                                              | Using [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) |                                                              |                                                              |
| `X-DNSPrefetch-Control`            |                                                              | [Controlling DNS prefetching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control) |                                                              |                                                              |
| `X-Frame-Options`                  |                                                              | [The XFrame-Option Response Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) |                                                              |                                                              |
| `X-Requested-With`                 | 通常在值为“XMLHttpRequest”时使用                             |                                                              | Not standard                                                 |                                                              |

​	

### 消息头

#### X-Forwarded-For

在客户端访问服务器的过程中，如果需要经过HTTP代理或者负载均衡服务器，可以用来获取最初发起请求的客户端的`IP`地址，这个消息首部已经成为了一个标准。在消息流从客户端流向服务器的过程中被拦截下的情况下，服务端的访问日志只能记录代理服务器或者负载均衡服务器的`IP`地址。

如果想要获取最初发起请求的客户端的`IP`地址的话，X-Forwarded-For 就派上用场了：

```bash
X-Forwarded-For: <client>, <proxy1>, <proxy2>
X-Forwarded-For: 203.0.113.195, 70.41.3.18, 150.172.238.178
# 第一个就是 origin IP 地址。
```

#### X-Real-IP

当设置 `X-Real-IP` 时,我们会在第一级代理时就会设置真实客户端 `IP`。

203.0.113.195(client) 经过代理： 70.41.3.18, 150.172.238.178

会在第一次代理 `70.41.3.18`设置`X-Real-IP` ：`203.0.113.195`

与`X-Forwarded-For` 的却别是：

 `X-Real-IP` 为一个`IP`地址

`X-Forwarded-For`为多个`IP`地址

#### remoteAddr 

203.0.113.195(client) 经过代理： 70.41.3.18, 150.172.238.178后；

`remoteAddr `: `150.172.238.178`

`remoteAddr` 为最后一次代理的IP地址

#### 如何判断为公网地址

以下IP段的地址都是内网IP地址。
（1）10.0.0.0 到 10.255.255.255
（2）172.16.0.0 到172.31.255.255
（3）192.168.0.0 到192.168.255.255

#### Access-Control-Allow-Origin

`Access-Control-Allow-Origin` 响应指定了该响应的资源是否呗允许与给定的origin共享。

**语法**：

```bash
Access-Contol-Allow-Origin: *
```

如需允许`https://developer.mozilla.org`访问您的资源，您可以设置：

```
Access-Control-Allow-Origin: https://developer.mozilla.org
```

#### Access-Control-Allow-Headers

响应首部 **`Access-Control-Allow-Headers`** 用于 [preflight request](https://developer.mozilla.org/zh-CN/docs/Glossary/Preflight_request) （预检请求）中，列出了将会在正式请求的 [`Access-Control-Request-Headers`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Request-Headers) 字段中出现的首部信息。

#### Access-Control-Max-Age

The **`Access-Control-Max-Age`** 这个响应头表示 [preflight request](https://developer.mozilla.org/zh-CN/docs/Glossary/Preflight_request) （预检请求）的返回结果（即 [`Access-Control-Allow-Methods`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Methods) 和[`Access-Control-Allow-Headers`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) 提供的信息） 可以被缓存多久。

- 在 Firefox 中，[上限是24小时](https://dxr.mozilla.org/mozilla-central/rev/7ae377917236b7e6111146aa9fb4c073c0efc7f4/netwerk/protocol/http/nsCORSListenerProxy.cpp#1131) （即 86400 秒）。
- 在 Chromium v76 之前， [上限是 10 分钟](https://cs.chromium.org/chromium/src/services/network/public/cpp/cors/preflight_result.cc?l=36&rcl=52002151773d8cd9ffc5f557cd7cc880fddcae3e)（即 600 秒)。
- 从 Chromium v76 开始，[上限是 2 小时](https://cs.chromium.org/chromium/src/services/network/public/cpp/cors/preflight_result.cc?l=31&rcl=49e7c0b4886cac1f3d09dc046bd528c9c811a0fa)（即 7200 秒)。Chromium 同时规定了一个默认值 5 秒。
- 如果值为 **-1**，表示禁用缓存，则每次请求前都需要使用 OPTIONS 预检请求。

#### Access-Control-Allow-Methods

响应首部 **`Access-Control-Allow-Methods`** 在对 [preflight request](https://developer.mozilla.org/zh-CN/docs/Glossary/Preflight_request).（预检请求）的应答中明确了客户端所要访问的资源允许使用的方法或方法列表。

- GET：GET方法请求一个指定资源的表示形式，使用GET的请求应该只被用于获取数据。
- HEAD：HEAD方法请求一个与GET请求的响应相同的响应，但没有响应体。
- POST：POST方法用于将实体提交到指定的资源，通常导致在服务器上的状态变化或副作用。
- PUT：PUT方法用请求有效载荷替换目标资源的所有当前表示。
- DELET：DELETE方法删除指定的资源。
- CONNECT：CONNECT方法建立一个到由目标资源标识的服务器的隧道。
- OPTIONS：OPTIONS方法用于描述目标资源的通信选项。
- PATCH：PATCH方法用于对资源应用部分修改。

服务器所返回的 [`Access-Control-Allow-Methods`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Methods) 首部字段将所有允许的请求方法告知客户端。该首部字段与 [`Allow`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Allow) 类似，但只能用于涉及到 CORS 的场景中。