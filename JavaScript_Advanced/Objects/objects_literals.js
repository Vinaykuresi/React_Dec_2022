
var employee = {
    name : "Vinay",
    age : 30,
    designation : "SSE",
    additional_details : {
        phone_no : 9154549455,
        city : "Tirupati"
    },
    print_details : function (name){
        return `Employee name : ${name}, Employee city : ${this.additional_details.city}`
    }
}


// console.log(employee.designation)
// console.log(employee["designation"])

console.log(employee.print_details("Rahul"))
