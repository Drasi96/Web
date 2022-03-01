const { appendFile } = require("fs");
var http = require("http");
const PORT = process.env.PORT || 3000;
http.createServer(function(request,response){
    //send the http reader
    //http stat 200 : OK
    //Content Type: text/plain
    response.writeHead(200, {'Content-Type':'text/plain'});

    response.end('Hello World\n');

}).listen(PORT, () => {

//Console will print the message
console.log('Our app is running on port ${ PORT }');
});