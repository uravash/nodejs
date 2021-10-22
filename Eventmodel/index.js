const EventEmitter = require ("events")
const event = new EventEmitter();
event.on("MyName",()=>{
    console.log("This Is Event Module")
})
event.on("MyName",()=>{
    console.log("This ")
})
event.on("MyName",()=>{
    console.log(" Is ")
})
event.on("MyName",()=>{
    console.log(" Event Module")
})
event.emit("MyName")
event.on("package",(sc,msg)=>{
    console.log(`server runing ${sc} and msg is ${msg}`)
})
event.emit("package",200,"ok")