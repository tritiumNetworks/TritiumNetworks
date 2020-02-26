const path = require('path').resolve()
const { readFileSync, writeFileSync } = require('fs')

const facts = []
const rawfacts = readFileSync(path + '/data/facts').toString('utf-8')

rawfacts.split('\n\n').forEach((s) => {
  const e = s.split('\n')
  if (e.length > 1) {
    if (e[1] === 'no-bottom') e[1] = ''
    const x = { tops: e[0], bottoms: e[1] }
    facts.push(x)
  }
})

setInterval(() => {
  let rawfacts = ''
  facts.forEach((f) => {
    if (f.bottoms.length < 1) f.bottoms = 'no-bottom'
    rawfacts += [f.tops, f.bottoms, '\n'].join('\n')
  })
  writeFileSync(path + '/data/facts', rawfacts)
}, 10000)

module.exports = (id) => {
  let res = {}
  if (id) {
    res = facts[id]
    if (!res) res = { tops: 'There is no #' + id, bottoms: 'no-bottom' }
  } else res = facts[Math.floor(Math.random() * facts.length)]
  if (res.bottoms === 'no-bottom') res.bottoms = ''
  return res
}

module.exports.push = (obj) => {
  return facts.push(obj) - 1
}
