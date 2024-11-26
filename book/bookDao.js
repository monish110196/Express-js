const Book = require('./bookModel');

class BookDao {

  async create(bookData) {
    const book = new Book(bookData);
    return await book.save();
  }

  async getById(bookId) {
    return await Book.findById(bookId);
  }

  async getAll() {
    return await Book.find();
  }

  async update(bookId, bookData) {
    return await Book.findByIdAndUpdate(bookId, bookData, { new: true });
  }

 
  async delete(bookId) {
    return await Book.findByIdAndDelete(bookId);
  }
}

module.exports = new BookDao();

//The DAO layer will contain the data access logic (CRUD operations) to interact with the MongoDB database.
//DAO Data Access Object