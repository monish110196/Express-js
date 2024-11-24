const Book = require("./book");
var connectToDB = require("./mongoDB");
var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json())
const axios = require('axios');


connectToDB().then(() => {
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to start the server:', err);
});


app.get('/', function (req, res) {
  res.send("Helloworld");
});

let saveBook = async (book) => {
  let bookObj = new Book();
  bookObj.title = book?.title;
  bookObj.author = book?.author;
  bookObj.publishedYear = book?.publishedYear;
  bookObj.genre = book?.genre;
  bookObj.price = book?.price;
  bookObj.stock = book?.stock
  await bookObj.save();
}
 app.post('/', function (req, res) {
  let book = req.body;
  console.log("book -->", book);
  saveBook(book).then(data => {
    console.log("data -->",data)
    res.send(data)
  }).catch(err => { 
    console.error("Error saving book:", err);
    res.status(500).send("Error saving book");
  });
});


app.use('/things', function (req, res, next) {
  console.log("A request for things received at " + Date.now());
  next();
});


app.get('/things', function (req, res) {
  res.send('Things');
});

