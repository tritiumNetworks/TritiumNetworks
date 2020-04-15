module.exports = { _root: '/main', _socket: false, _cors: true, _parser: [], ready }

const { readFileSync, writeFileSync } = require('fs')
const path = require('path').resolve()
const { renderFile } = require('ejs')
let count = Number(readFileSync(path + '/router/main/data/data').toString('utf-8'))

function ready (app) {
  console.log('main is loaded')
  app.get('/', (_req, res) => {
    count++
    renderFile(path + '/router/main/page/index.ejs', { count }, (err, str) => {
      if (err) console.log(err)
      res.send(str)
    })
    if (count === 16777215) console.log(res.ip)
  })
}

setInterval(() => {
  writeFileSync(path + '/router/main/data/data', count)
}, 10000)
