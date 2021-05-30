var http = require('http');
var os=require('os');
var mymod=require('./module');
http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("the date and time is:"+mymod.mytime());
   // res.end('Hello HummingBird,This is the Response From the Server');
    console.log(os.hostname())
}).listen(9000);