import express from 'express'

const start = () => {
  const app = express()
  const router = new express.Router()

  router.get('/app', (req, res) => {
    res.status(200).end(
      JSON.stringify({
        msg: 'success',
        code: 0,
        data: {
          name: 'express router',
          url: req.originalUrl
        }
      })
    )
  })
  app.use(router)
  // 兜底通用路由
  app.use('*', (req, res) => {
    res.status(200).end(
      JSON.stringify({
        msg: 'success',
        code: 0,
        data: {
          name: 'express',
          url: req.originalUrl
        }
      })
    )
  })

  app.listen(9001, () => {
    console.log('Server on：http://localhost:9001')
  })
}

start()
