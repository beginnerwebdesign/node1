const http=require('http');
var fs=require('fs');
const server=http.createServer((req,res)=>{
    res.write('<h2>Welcome to the page</h2>')
    
    if(req.url=='/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end("<h2>This is home</h2>");

    }
    if(req.url=='/about'){
        fs.readFile('easy.html','utf-8',(err,data)=>{
            if(err){
                console.log("error");
            }
            else{
                res.write(data);
            }
        });
        
    }
})
server.listen(8000);