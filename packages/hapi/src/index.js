import Hapi from '@hapi/hapi'

const start = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 9004,
    host: process.env.HOST || '0.0.0.0'
  })

  server.route({
    method: 'get',
    path: '/',
    handler: (req) => {
      return req.url
    }
  })

  // 兜底
  server.route({
    method: '*',
    path: '/{any*}',
    handler: function () {
      return '404 Error! Page Not Found!'
    }
  })

  await server.start()
  console.log('Server on：http://localhost:9004')
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

start()
