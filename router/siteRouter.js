function router (app, render, maker) {
  app.get('/', (req, res) => render(req, res, maker(), 'index.ejs'))
  app.get('/make', (req, res) => render(req, res, maker(), 'make.ejs'))
  app.get('/:id', (req, res) => render(req, res, maker(req.params.id), 'index.ejs'))
}

module.exports = router
