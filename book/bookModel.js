const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: { type: Number, required: true},
  genre: { type: String },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;