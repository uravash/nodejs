const express = require('express')
const app = express()
const path = require ("path")
const staticPath = path.join(__dirname,"../public");
app.use(express.static(staticPath));

app.get('/', (req, res) =>{
    res.send('hello world')
    res.send()
  })
  app.get("/about",(req,res)=>{
    //   res.send("this is about page")
    res.send("<h1>this is about page </h1>");
    res.send();
  })
app.get("/home",(req,res)=>{
    // res.status(200).send("This Is Home Page")
    res.send([{
        id:1
    },
    {
        id:1
    },
    {
        id:1
    }])
    res.send()
})
  app.listen(3000,()=>{
      console.log("successfully run port 3000")
  })