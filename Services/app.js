const Book = require("./book");
var connectToDB = require("./mongoDB");
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
app.use(express.json())
app.use(bodyParser.json());
const axios = require('axios');


connectToDB().then(() => {
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to start the server:', err);
});


app.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ error: 'Error retrieving books' });
    }
});

app.get('/books/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving the book' });
    }
});
app.put('/books/:id', async (req, res) => {
  try {
      const updatedBook = await Book.findByIdAndUpdate(
          req.params.id,req.body,{ new: true });

      if (updatedBook) {
          res.json({ message: 'Book updated successfully', book: updatedBook });
      } else {
          res.status(404).json({ error: 'Book not found' });
      }
  } catch (error) {
      res.status(500).json({ error: 'Error updating the book' });
  }
});
app.delete('/books/:id', async (req, res) => {
  try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);
      if (deletedBook) {
          res.json({ message: 'Book deleted successfully', book: deletedBook });
      } else {
          res.status(404).json({ error: 'Book not found' });
      }
  } catch (error) {
      res.status(500).json({ error: 'Error deleting the book' });
  }
});