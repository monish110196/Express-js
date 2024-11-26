const bookService = require('./bookService');

class BookController 
{
  
  async createBook(req, res) {
    
    try {
      console.log(req.body);
      const book = await bookService.createBook(req.body);
      res.status(201).json(book);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };


  async getBookById(req, res) {
  
    try {
      const book = await bookService.getBookById(req.params.id);
      if (!book) return res.status(404).json({ message: 'Book not found' });
      res.json(book);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async getAllBooks(req, res) {
    try {
      const books = await bookService.getAllBooks();
      res.json(books);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  
  async updateBook(req, res) {
    try {
      const book = await bookService.updateBook(req.params.id, req.body);
      if (!book) return res.status(404).json({ message: 'Book not found' });
      res.json(book);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  
  async deleteBook(req, res) {
    try {
      const book = await bookService.deleteBook(req.params.id);
      if (!book) return res.status(404).json({ message: 'Book not found' });
      res.json({ message: 'Book deleted' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

module.exports = new BookController();

//The controller layer will interact with the service layer to handle HTTP requests and responses.