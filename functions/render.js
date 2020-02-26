const path = require('path').resolve()
const { render, renderFile } = require('ejs')
const { existsSync, readFileSync } = require('fs')

function layout (point, options) {
  point = [path, 'layouts', point].join('/')
  if (existsSync(point)) return render(readFileSync(point, 'utf-8'), options)
  else return 'layout "' + point + '" is not exist'
}

function func (req, res, facts, point, data) {
  let options = { req, layout, facts }
  if (typeof data === 'object') options = { req, ...data, layout, facts }
  options = { ...options, options }

  renderFile([path, 'page', point].join('/'), options, (err, str) => {
    if (err) console.log(err)
    res.send(str)
  })
}

module.exports = func
