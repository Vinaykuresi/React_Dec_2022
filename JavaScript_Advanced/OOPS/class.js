
// class declaration
class Add {

    // constructor method
    constructor(num1, num2){
       this.num_1 = num1
       this.num_2 = num2  
    }

    // static method
    static display(){
        return "static method invoked."
    }

    // method or function
    add(){
        return this.num_1 + this.num_2
    }
}

// object creation
var add1 = new Add(20, 30)

// class method calling
console.log(add1.add())
// console.log(add1.num_1)

// static method calling
console.log(Add.display())