import connect from 'connect'

const start = () => {
  const app = connect()

  app.use('/', (req, res) => {
    res.statusCode = 200
    res.end(
      JSON.stringify({
        msg: 'success',
        code: 0,
        data: {
          name: 'connect',
          url: req.originalUrl
        }
      })
    )
  })

  app.listen(9002, () => {
    console.log('Server on：http://localhost:9002')
  })
}

start()
