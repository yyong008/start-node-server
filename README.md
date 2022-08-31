# start-node-server

Start the NodeJS HTTP service with a different framework

## 涉及框架

> **HTTP*协议是* \***建立在*TCP\*\*\*\* *协议之上的一种应用\*

> Nodejs net 模块基于流的 TCP 或 IPC 服务器和客户端

---

| 框架/库(偏后端) | 说明                            |
| --------------- | ------------------------------- |
| http            | 原生                            |
| express         | 中间件框架（实现了自己 router） |
| connect         | 中间件框架（没有实现 router）   |
| koa             | 新中间件框架（async/await）     |
| hapi            | 框架本身没有任何外部依赖        |
| fastify         | 快速低开小                      |
| nestjs          | 高效/可扩展框架（大而全）       |
| eggjs           | 企业级的 koa 框架               |
| midwayjs        | 渐进式、多范式框架              |
| Sails.js        | 及时 MVC 框架                   |

---

| 框架/库(偏后端) | 说明                     |
| --------------- | ------------------------ |
| nextjs          | react 服务端渲染、预渲染 |
| nuxtjs          | vue 服务端渲染、预渲染   |

| 框架/库(websocket) | 说明                  |
| ------------------ | --------------------- |
| socket.io          | websocket nodejs 实现 |
| ws                 | websocket nodejs 实现 |

---

## http

```js
import http from 'node:http'

const start = async () => {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(
      JSON.stringify({
        data: 'hello world'
      })
    )
  })

  server.listen(9000, () => {
    console.log(`Server on：http://localhost:9000`)
  })
}

start()
```
