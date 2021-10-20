//--------------Sync File System-------------------


// Data show in terminal
const name="webiwork";
console.log(name);

// Creating file
const fs = require("fs");
fs.writeFileSync("abc.txt","this is my nodejs first file");

// Reload file change data
fs.writeFileSync("abc.txt","hello world,this is my nodejs first file");

// Without Changes Prevoices Data
fs.appendFileSync("abc.txt","how are you ? What are you doing");   


//Read File
fs.readFileSync("abc.txt"); 
const buf_data =fs.readFileSync("abc.txt");
console.log(buf_data)

//Convert To string
org_data = buf_data.toString();
console.log(org_data)

//delete file
fs.unlinkSync("abc.txt")

// delete folder
fs.rmdir("Nodejs")

// whitout buffer data 
const data =fs.readFileSync("abc.txt","utf-8");
console.log(data);

//rename file
fs.renameSync("abc.txt","xyz.txt")



// -------------------Async File System --------------

// Creating Asyncfile
const fs = require("fs");
fs.writeFile("Async.txt","this is a Asysnc Page",(err)=>{console.log("create file successfully")});

// Reload Asyncfile change data 
fs.writeFile("Async.txt"," load a Asysnc Page",(err)=>{console.log(" reload page ")});

// Without Changes Prevoices Data
fs.appendFile("Async.txt"," Append a Asysnc Page",(err)=>{console.log(" without change the file ")});

//Read AsyncFile buffer code
fs.readFile("Async.txt",(err,data)=>{console.log("read file buffer code show")});
console.log(data);

//Read AsyncFile  string 
fs.readFile("Async.txt","utf-8",(err,data)=>{console.log(" read file string show")});
console.log(data);

//delete Asyncfile
fs.unlink("async.js",(err)=>{
    console.log("delete file")
})

//rename Asyncfile
fs.rename("abc.txt","xyz.txt",(err)=>{
    console.log("rename file ")
})

// Delete Folder

fs.rmdir("thapa",(err)=>{
    console.log("added folder ")
})
