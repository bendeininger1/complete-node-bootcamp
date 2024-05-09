const fs = require('fs');
const http = require('http');
const url = require('url');

/* // Non-Blocking, asynchronous way
fs.readFile('./txt/start.txt', 'utf-8', (err,data1) => {
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err,data2) => {
        console.log(data2);
    });
});
console.log('Will read file!'); */

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req,res) => {
    const pathName = req.url ;

    // Overview Page
    if(pathName === '/' || pathName === '/overview'){
        res.end('This is the OVERVIEW');
    } 
    
    // Product Page
    else if (pathName === '/product'){
        res.end('This is the PRODUCT');

        // API
    } else if (pathName === '/api') {
        res.writeHead(200, {
          'Content-type': 'application/json'
        });
        res.end(data);
    
    // Not Found
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
        });
        res.end('<h1>Page not found!</h1>');
    }
});

server.listen(8000,'127.0.0.1', () => {
    console.log('Listening on port 8000');
});