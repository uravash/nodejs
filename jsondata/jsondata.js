const Biodata={
    name :'webiwork',
    id:"webiwork@gmail.com",
    password:12345

}

// show data
console.log(Biodata.id)

// convert data object to Json 
const MyData = JSON.stringify(Biodata)
console.log(MyData)

// convert data Json to object
const Data = JSON.parse(MyData)
console.log(Data)