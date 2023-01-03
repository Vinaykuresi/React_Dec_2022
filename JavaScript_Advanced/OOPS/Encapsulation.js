

// class declaration
class Add {

    // private constructor method
    constructor(){
       var num_1;
       var num_2; 
    }

    // setting the value
    setter(num1, num2){
        this.num_1 = num1
        this.num_2 = num2 
    }

    // getter method
    getter(){
        return `${this.num_1}, ${this.num_2}`
    }

    // method or function
    add(){
        return this.num_1 + this.num_2
    }
}

// object creation
var add1 = new Add()

// setter method
add1.setter(20, 30)

console.log(add1.num_1)

// getter method
console.log(add1.getter())

console.log(add1.add())


