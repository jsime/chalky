var chalky = require("http");
var url = require("url");

chalky.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Chalky Placeholder");
    res.end();
}).listen(3000);
console.log('Server started.');
