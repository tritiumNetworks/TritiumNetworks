function router (app, render) {
  app.get('/', (req, res) => render(req, res, 'index.ejs'))
}

module.exports = router
