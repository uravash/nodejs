const http = require ("http")

const server=http.createServer((req,res)=>{
res.end("hello http server");
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listing to the port on 8000");
});