const fs = require('fs');

// Non-Blocking, asynchronous way
fs.readFile('./txt/start.txt', 'utf-8', (err,data) => {
    console.log(data);
})
console.log('Will read file!');