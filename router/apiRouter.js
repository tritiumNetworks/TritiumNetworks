function func (app, maker) {
  app.get('/api/make', (req, res) => {
    const { tops, bottoms } = req.query
    if (tops.length > 7) {
      res.send({ success: true, id: maker.push({ tops, bottoms }) })
    } else res.send({ success: false, error: '윗 내용은 적어도 8글자 이상이여야 합니다' })
  })
}

module.exports = func
