const cooldowns = []

function func (app, maker) {
  app.get('/api/make', (req, res) => {
    if (cooldowns.includes(req.ip)) return res.send({ success: false, error: '너무 자주 요청하고 있습니다! 잠시만 기다려 주세요' })
    cooldowns.push(req.ip)
    setTimeout(() => {
      cooldowns[cooldowns.indexOf(req.ip)] = ':)'
    }, 10000)
    const { tops, bottoms } = req.query
    if (!tops || !bottoms) res.send({ success: false, error: '적어도 윗내용은 적어야 됩니다' })
    if (tops.length > 7) {
      res.send({ success: true, id: maker.push({ tops, bottoms }) })
    } else res.send({ success: false, error: '윗 내용은 적어도 8글자 이상이여야 합니다' })
  })
}

module.exports = func
