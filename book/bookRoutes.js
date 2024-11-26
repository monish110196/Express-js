const express = require('express');
const bookController = require('./bookController');
const router = express.Router();


router.post('/books', bookController.createBook);


router.get('/books/:id', bookController.getBookById);


router.get('/books', bookController.getAllBooks);


router.put('/books/:id', bookController.updateBook);


router.delete('/books/:id', bookController.deleteBook);

module.exports = router;

//The routes layer defines the HTTP endpoints for the books and maps them to controller methods.