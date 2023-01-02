
var json = {
    "name" : "Vinay",
    "age" : 27
}

console.log(json)

// converting to object

var object_converted = JSON.parse(JSON.stringify(json))
console.log(object_converted)

// converting to JSON

var json_object = JSON.stringify(object_converted)
console.log(json_object)


