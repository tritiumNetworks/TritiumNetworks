module.exports = { _root: '/main', _socket: true, _cors: true, _parser: [], ready, static: '/src' }

const path = require('path').resolve()
const { readFileSync } = require('fs')

/**
 * @param {import('../../class/Rapp')} app 
 * @param {import('socket.io').Server} socket 
 */
function ready (app, socket) {
  console.log('main is loaded')
  let subtitle = 'Open-Source Software Dev Group'
  app.get('/', (_, res) => res.send(readFileSync(path + '/router/main/page/index.html', { encoding: 'utf-8' })))

  socket.on('connect', (s) => {
    s.emit('main:subtitle', subtitle)
    s.on('main:subtitle', (sub) => { subtitle = sub; socket.emit('main:subtitle', subtitle) })
  })
}
