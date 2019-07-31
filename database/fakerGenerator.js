const faker = require('faker');
const fs = require("promise-fs")
const mongoose = require('mongoose');

//Clear current file contents
fs.writeFileSync('./database/fakeData.json', '', 'utf-8') 

//Start writing new file contents
count = 0;
for (let i = 0; i < 10000000; i++) {
  const product = {}
  product.asin = i;
  product.productTitle = faker.commerce.productName();  

  if (i % 10000 === 0) {
    count++
    console.log(count+'0k done')
  }
  
  fs.appendFileSync('./database/fakeData.json', JSON.stringify(product) + '\n', 'utf-8')
}

//import the items from the file to the database
let exec = require('child_process').exec
let command = `mongoimport --db products --collection product --drop --file /Users/hadleycrowl/gitrepos/SDC/navigation-bar/database/fakeData.json`
exec(command, (err, stdout, stderr) => {
  console.log('items successfully inserted')
  mongoose.disconnect()
})





