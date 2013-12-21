module.exports = function(app) {
  var Controller = { name: 'BookController' },
      BookModel = app.models.BookModel;
  
  Controller.list = function(req, res){
    BookModel.list({}, function(error, books) {
      res.format({
        html: function(){
          if(error) {
            res.render('books/bookshelf', {error: error});
          } else {
            res.render('books/bookshelf', {books: books});
          }
        }, 
        json: function(){
          if(error) {
            res.send(error.code, error);
          } else {
            res.send(200, books);
          }
        }
      });
    });
  };
  
  return Controller;
}
