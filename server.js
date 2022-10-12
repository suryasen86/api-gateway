const gateway = require('fast-gateway')
const server = gateway({
  routes: [{
    prefix: '/user',
    target: 'http://127.0.0.1:3000'
  },
  {
    prefix: '/product',
    target: 'http://127.0.0.1:3001'
  }]
})
server.get('/', (req, res) => res.send('Hello World!'))

server.start(8080)