function router (app, render) {
  app.get('/', (req, res) => render(req, res, 'name_seal'))
}

module.exports = router
