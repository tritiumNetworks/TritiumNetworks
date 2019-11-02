const PORT = 3004 || process.env.triNet

const fs = require('fs')
const ejs = require('ejs')
const cors = require('cors')
const path = require('path').resolve()
const chalk = require('chalk')
const express = require('express')

const layout = {}
fs.readdir(path + '/layout/', (err, files) => {
  if (err) console.log(chalk.red(err))
  else {
    files.forEach((file) => {
      layout[file.replace('.ejs', '')] = () => {
        let returnStr
        ejs.renderFile(path + '/layout/' + file, (err, str) => {
          if (err) {
            console.log(chalk.red(err))
          } else returnStr = str
        })
        return returnStr
      }
    })
  }
})

const app = express()
app.use(cors())

app.get('/', (_req, res) => res.redirect('/triNet'))

app.get('/.js', (_req, res) => res.sendFile(path + '/src/main.js'))
app.get('/.css', (_req, res) => res.sendFile(path + '/src/main.css'))

app.get('/triNet', (_req, res) =>
  ejs.renderFile(path + '/view/triNet.ejs', { layout }, (err, str) => {
    if (err) {
      console.log(chalk.red(err))
    } else res.send(str)
  })
)

app.listen(PORT, () => {
  console.log(chalk.green('Tritium Networks Webpage is now on http://localhost:') + chalk.green.bold(PORT))
})
