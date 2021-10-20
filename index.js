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
fs,fs.renameSync("abc.txt","xyz.txt")
