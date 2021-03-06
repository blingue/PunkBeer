
const url = require('url');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

module.exports = getData;

function getData(req,res,pathName) {
  const mimeType = {
    '.json': 'application/json',
  };
  fs.exists(pathName, (exist) => {
    if(!exist) {
      // if the file is not found, return 404
      res.statusCode = 404;
      res.end(`File ${pathName} not found!`);
      return;
    }
    // read file from file system
    fs.readFile(pathName, (err, data) => {
      if(err){
        res.statusCode = 500;
        res.end(`Error getting the file: ${err}.`);
      } else {
        // based on the URL path, extract the file extention. e.g. .js, .doc, ...
        const ext = path.parse(pathName).ext;
        // if the file is found, set Content-type and send data
        res.setHeader('Content-type', mimeType[ext] || 'text/plain' );
        const users = JSON.parse(data);
        const username = req.query.username;
        const password = req.query.password;
        const user = _.filter(users, {username: username, password: password});
        if(user.length > 0){
          res.statusCode = 200;
          res.send(user[0]);
        }else{
          res.statusCode = 401;
          res.end("Username or Password is incorrect");
        }
      }
    });
  });
  }