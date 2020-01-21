const path = require('path').resolve()
const { renderFile } = require('ejs')

function func (req, res, point, data) {
  let options = { req }
  if (typeof data === 'object') options = { req, ...data }

  renderFile([path, 'page', point].join('/'), options, (err, str) => {
    if (err) console.log(err)
    res.send(str)
  })
}

module.exports = func
