function router (app) {
  app.get('/', (_req, res) => { res.send('Tritium Networks') })
}

module.exports = router
