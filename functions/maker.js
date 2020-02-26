const path = require('path').resolve()
const { readFileSync } = require('fs')

const facts = []
const rawfacts = readFileSync(path + '/data/facts').toString('utf-8')

rawfacts.split('\n\n').forEach((s) => {
  const e = s.split('\n')
  if (e.length > 1) {
    const x = { owo: e[0], awoo: e[1] }
    facts.push(x)
  }
})

module.exports = () => {
  return facts[Math.floor(Math.random() * facts.length)]
}
