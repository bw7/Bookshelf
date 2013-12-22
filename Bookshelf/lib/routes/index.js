module.exports = function(app) {
  var BookController = app.controllers.BookController;
  
  app.get('/', function(req, res) {
    res.redirect('/books');
  });

  app.get('/books', BookController.list);
  app.get('/books/:id', BookController.show);

}
