import fastify from 'fastify'

const start = async () => {
  const app = fastify({ logger: true })

  app.get('/', async () => {
    return { hello: 'world' }
  })

  const opts = {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            hello: { type: 'string' }
          }
        }
      }
    }
  }
  app.get('/v1/hello', opts, (request, reply) => {
    reply.send({ hello: 'world' })
  })

  try {
    await app.listen({ port: 9005 }, () => {
      console.log(`Server on：http://localhost:${app.server.address().port}`)
    })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
