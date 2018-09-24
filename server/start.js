const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const app = express();
const getData = require("./getData");

const port = 9000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(morgan('dev'));

// Get All User from Response
app.get('/getUsers', (req, res) => {
  const filePath = `./users/users.json`;
  console.log(filePath);
  //getData(req,res,filePath)
  res.send(filePath)
});

// Get Single User from Response
/*
app.get('/getUser', (req, res) => {
  const filePath = `./users/users.json`
  console.log(filePath);
  getData(req,res,filePath)
});*/

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});