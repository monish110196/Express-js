const bookDao = require('./bookDao');

class BookService {
 
  
  async createBook(bookData) {
    return await bookDao.create(bookData);
  }

  
  async getBookById(bookId) {
    return await bookDao.getById(bookId);
  }

  
  async getAllBooks() {
    return await bookDao.getAll();
  }

  
  async updateBook(bookId, bookData) {
    return await bookDao.update(bookId, bookData);
  }

 
  async deleteBook(bookId) {
    return await bookDao.delete(bookId);
  }
}

module.exports = new BookService();


//The service layer will interact with the DAO layer to fetch, modify, and delete books.
//  It will also contain business logic for managing books.