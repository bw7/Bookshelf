module.exports = function(app) {
  
  app.get('/', function(req, res) {
    res.render('books/bookshelf');
  });

}
