const fs = require('fs');

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json');

// const dataJson = dataBuffer.toString();

// const data = JSON.parse(dataJson);

// console.log(data);

const data = JSON.parse(fs.readFileSync('1-json.json').toString());
data.name = 'Mircea';
data.age = 33;
fs.writeFileSync('1-json.json', JSON.stringify(data))
console.log('new Data: ', JSON.parse(fs.readFileSync('1-json.json').toString()));

