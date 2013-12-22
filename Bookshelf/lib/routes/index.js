module.exports = function(app) {
  var BookController = app.controllers.BookController;
  
  app.get('/', function(req, res) {
    res.redirect('/books');
  });

  /* For Books */
  app.get('/books/new', BookController.new);
  app.get('/books', BookController.list);
  app.post('/books', BookController.create);
  app.get('/books/:id', BookController.show);
}
