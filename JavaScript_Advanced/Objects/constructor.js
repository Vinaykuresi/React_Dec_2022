
// constructor function
function Employee(name, age, designation, phone_no, city){
    this.name = name
    this.age = age 
    this.designation = designation
    this.phone_no = phone_no
    this.city = city

    this.print_details = function (){
        return `Employee name : ${this.name}, Employee city : ${this.city}`
    }
}

// Object Creation
var emp1 = new Employee("Vinay", 27, "Team Lead", 9154549566, "Tirupati");
var emp2 = new Employee("Rahul", 30, "Team Lead", 9154549566, "Bangalore");

console.log(emp1.name)

console.log(emp2.name)

console.log(emp2.print_details())


