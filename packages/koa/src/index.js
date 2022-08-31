import Koa from 'koa'
import Router from '@koa/router'

const start = () => {
  const app = new Koa()
  const router = new Router()

  router.get('/app', (ctx) => {
    ctx.body = 'Hello World!'
  })

  app.use(router.routes())
  // 兜底
  app.use((ctx) => {
    ctx.body = {
      msg: 'success koa',
      code: 0,
      data: {
        name: 'express',
        url: ctx.originalUrl
      }
    }
  })
  app.listen(9003, () => {
    console.log('Server on：http://localhost:9003')
  })
}

start()
