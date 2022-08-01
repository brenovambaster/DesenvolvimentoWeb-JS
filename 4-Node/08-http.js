//import htpp from 'http'; novo ES6
const htpp = require('http');

htpp.createServer((req, res) => {
    res.write("Hello Word.");
    res.end();
    console.log("foi")
}).listen(8080)
