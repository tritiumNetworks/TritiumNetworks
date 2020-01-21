const { readFileSync } = require('fs')
const cors = require('cors')
const path = require('path').resolve()
const chalk = require('chalk')
const http = require('http')
const https = require('https')
const express = require('express')
const renderer = require(path + '/functions/render')
const siteRouter = require(path + '/router/siteRouter')

const app = express()
const ssl = { cert: readFileSync(path + '/cert/trinets-cert.pem'), key: readFileSync(path + '/cert/trinets-key.pem') }

app.use(cors())
app.use('/src', express.static(path + '/src'))

siteRouter(app, renderer)

http.createServer(app).listen(80, () => { console.log(chalk.green('Non-SSL Server is now on http://localhost:80')) })
https.createServer(ssl, app).listen(443, () => { console.log(chalk.green('SSL Server is now on https://localhost:433')) })
