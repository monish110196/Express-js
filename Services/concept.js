const Laptop = require("./laptop");
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

let saveLaptop = async (laptop) => {
  let laptopObj = new Laptop();
  laptopObj.brand = laptop?.brand;
  laptopObj.model = laptop?.model;
  laptopObj.processor = laptop?.processor;
  laptopObj.ram = laptop?.ram;
  laptopObj.storage = laptop?.storage;
  laptopObj.price = laptop?.price
  await laptopObj.save();
}
 app.post('/', function (req, res) {
  let laptop = req.body;
  console.log("laptop -->", laptop);
  saveLaptop(laptop).then(data => {
    console.log("data -->",data)
    res.send(data)
  }).catch(err => { 
    console.error("Error saving laptop:", err);
    res.status(500).send("Error saving laptop");
  });
});


app.use('/things', function (req, res, next) {
  console.log("A request for things received at " + Date.now());
  next();
});


app.get('/things', function (req, res) {
  res.send('Things');
});

