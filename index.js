const http = require('http');

const fs = require('fs');
const port = 3003;
const hostName = 'localhost';
fs.writeFile('index.html', '<h1>Hello World</h1> \n <p>This is Priyanka Gangwar...</p>', (err) => {
    if (err) throw err
    console.log('file is created');
});

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        res.end()

    })
});
server.listen(port, hostName, () => {
    console.log(`server is running at http://${hostName}:${port}/`);
});