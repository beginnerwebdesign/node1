
const http1=require('http');
const {readFile}=require('fs');
const server=http1.createServer((req,res)=>
{
    if(req.url=="/")
    {
        readFile('./easy.html','utf-8',(err,data)=>
        {
            if(err){
                console.log('error');
            }
            else{
                res.write(data);
            }
        })
    }
    else if(req.url==="/about")
    {
        res.write("<h1>This is about page</h1>");
    }
    else{
        res.write("<p>back to home page</p> <a href='/'> home</a>");
    }
});
server.listen(8000);