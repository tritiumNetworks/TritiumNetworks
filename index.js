module.exports = { _root: '/main', _socket: true, _cors: true, _parser: [], ready, static: '/src' }

const path = require('path').resolve()
const { readFileSync } = require('fs')

/**
 * @param {import('../../class/Rapp')} app 
 * @param {{ ws: import('socket.io').Server, wss: import('socket.io').Server }} sockets 
 */
function ready (app, sockets) {
  console.log('main is loaded')
  let subtitle = 'Open-Source Software Dev Group'
  app.get('/', (_, res) => res.send(readFileSync(path + '/router/main/page/index.html', { encoding: 'utf-8' })))
  sockets.ws.on('connect', (s) => {
    s.emit('main:subtitle', subtitle)
    s.on('main:subtitle', (sub) => { subtitle = sub; sockets.ws.emit('main:subtitle', subtitle); sockets.wss.emit('main:subtitle', subtitle) })
  })
  sockets.wss.on('connect', (s) => {
    s.emit('main:subtitle', subtitle)
    s.on('main:subtitle', (sub) => { subtitle = sub; sockets.ws.emit('main:subtitle', subtitle); sockets.wss.emit('main:subtitle', subtitle) })
    s.on('main:subtitle', (sub) => { subtitle = sub; sockets.ws.emit('main:subtitle', subtitle); sockets.wss.emit('main:subtitle', subtitle) })
  })

  sockets.wss.on('connect', (s) => {
    s.emit('main:subtitle', subtitle)
    s.on('main:subtitle', (sub) => { subtitle = sub; sockets.ws.emit('main:subtitle', subtitle); sockets.wss.emit('main:subtitle', subtitle) })
  })
}
