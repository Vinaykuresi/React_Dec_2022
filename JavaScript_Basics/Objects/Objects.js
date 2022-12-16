
var employee ={ // parent
    name : "Vinay",
    DOB : "14-04-1995",
    designation : "SSE",
    additional_details : { // nested object -> child
        mobile_no : 9154549566,
        address : "Tirupati",
        street : { // grand child
            lane : "DC",
            street : "RD Road"
        }
    }
}


// console.log("Name : ", employee.name)
// console.log("Name : ", employee["name"])

// console.log("Designation : ", employee.designation)

// console.log("Mobile no : ", employee.additional_details.mobile_no)

// console.log(Object.keys(employee))
// console.log(Object.values(employee))

// for(const property in employee){
//     console.log(`${property} : ${employee[property]}`)
// }

// for(const [key, value] of Object.entries(employee)){
//     console.log(`${key} : ${value}`)
// }

const iterate = (obj) => {
    Object.keys(obj).forEach(key => {
        console.log(`${key} : ${obj[key]}`)
        // recursion
        if(typeof obj[key] === "object" && obj[key] !== null){
            iterate(obj[key])
        }
    })
}

// iterate(employee)

// null -> "no object"

var item = null 

console.log(item)
console.log(typeof(item))












