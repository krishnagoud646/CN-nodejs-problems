// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here

const http = require("http");

const server = http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Response received at port 8080");
})

server.listen(8080, () => {
    console.log('Server is listening on port 8080...');
});

module.exports = server;