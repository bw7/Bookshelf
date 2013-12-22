module.exports = function(app) {
  var BookController = app.controllers.BookController;
  
  app.get('/', function(req, res) {
    res.redirect('/books');
  });

  /* For Books */
  app.get('/books', BookController.list);
  app.get('/books/:id', BookController.show);
  app.get('/books/new', BookController.new);
  app.post('/books', BookController.create);
}
