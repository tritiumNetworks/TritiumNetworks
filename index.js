const { readFileSync, writeFileSync } = require('fs')
const cors = require('cors')
const path = require('path').resolve()
const chalk = require('chalk')
const http = require('http')
const https = require('https')
const express = require('express')
const { renderFile } = require('ejs')

const app = express()
const ssl = { cert: readFileSync(path + '/cert/trinets-cert.pem'), key: readFileSync(path + '/cert/trinets-key.pem') }

let count = Number(readFileSync(path + '/data/data').toString('utf-8'))

app.use(cors())
app.get('/', (_req, res) => {
  count++
  renderFile(path + '/page/index.ejs', { count }, (err, str) => {
    if (err) console.log(err)
    res.send(str)
  })
  if (count === 16777215) console.log(res.ip)
})

setInterval(() => {
  writeFileSync(path + '/data/data', count)
}, 10000)

http.createServer(app).listen(80, () => { console.log(chalk.green('Non-SSL Server is now on http://localhost:80')) })
https.createServer(ssl, app).listen(443, () => { console.log(chalk.green('SSL Server is now on https://localhost:433')) })
