import http from 'node:http'

const start = async () => {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(
      JSON.stringify({
        msg: 'success',
        code: 0,
        data: {
          name: 'node:http',
          url: req.url
        }
      })
    )
  })

  server.listen(9000, () => {
    console.log(`Server on：http://localhost:9000`)
  })
}

start()
