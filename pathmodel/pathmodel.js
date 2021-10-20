const path = require("path");

//show directory name
console.log(path.dirname("/home/webiwork56/Desktop/Nodejs/pathmodel/pathmodel.js"))

//show extention
console.log(path.extname("/home/webiwork56/Desktop/Nodejs/pathmodel/pathmodel.js"))

//show baseName
console.log(path.basename("/home/webiwork56/Desktop/Nodejs/pathmodel/pathmodel.js"))

// show full data in object form
console.log(path.parse("/home/webiwork56/Desktop/Nodejs/pathmodel/pathmodel.js"))

// Object in one data show 
const mypath = path.parse("/home/webiwork56/Desktop/Nodejs/pathmodel/pathmodel.js")
console.log(mypath.name)

const my = path.parse("/home/webiwork56/Desktop/Nodejs/pathmodel/pathmodel.js")
console.log(my.root)