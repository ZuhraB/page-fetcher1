const request = require('request');
var fs = require('fs');

var args = process.argv.slice(2);
let URL = args[0];
fileToSaveTo = args[1];

request(URL, (error, response, body) => {
  if (error) {
    console.log(error)
  } else {
    fs.writeFile(fileToSaveTo, body, function (err) {
      if (err) {
        console.log("File cannot be made ")
      //} else if (fs.existsSync(fileToSaveTo)) {
        console.log("File already exists")
      } else {
        console.log(`Downloaded and saved ${fs.statSync(fileToSaveTo).size} bytes to ${fileToSaveTo}`)
      }
    });
  }



});

