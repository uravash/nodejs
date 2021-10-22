// const url = require("url");
const fs = require("fs")
const http = require("http");
const server = http.createServer((req, res) => {
    // console.log(req.url); 
    if (req.url == "/") {
        res.end("This is url page")

    } else if (req.url == "/about") {
        res.end("This is about page")

    } else if (req.url == "/home") {
        res.end("This is home page")
    } else if (req.url == "/userapi") {
        fs.readFile(`${__dirname}/UserApi/userapi.json`, "utf-8", (err, data) => {
            //   console.log(data)
            const objectdata = JSON.parse(data)
            res.end(objectdata[0].name)
        })
    }
    else {
        res.writeHead(404, { "content-type": "text/html" })
        res.end("<h1>404 Error</h1>")
    }

})
server.listen(7000, "127.0.0.1", () => {
    console.log("Listing to the port 7000")
})