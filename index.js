var http = require("http");
fs = require('fs');
const PORT = process.env.PORT || 3000;
http.createServer(function(request,response){
    //send the http reader
    //http stat 200 : OK
    //Content Type: text/plain
    response.writeHead(200, {
        'Content-Type':'text/html',
        'Access-Control-Allow-Origin': '*'
});
    var readStream = fs.createReadStream(__dirname + '/index.html');
    readStream.pipe(response);

}).listen(PORT, () => {

//Console will print the message
console.log('Our app is running at http://127.0.0.1:'+ PORT);
});