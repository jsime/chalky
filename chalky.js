var http = require("http");

http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Chalky Placeholder");
    res.end();
}).listen(3000);
