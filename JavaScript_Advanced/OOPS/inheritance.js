
class Add_Abstract{
    add(){
        console.log("This method is used to add two number")
    }
}

class Calculation extends Add_Abstract  {

    // constructor method
    constructor(num1, num2){
       super()
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

    // method or function
    sub(){
        return this.num_1 - this.num_2
    }

}

class Add extends Calculation {
    constructor(num1, num2){
        // will invoke the propertiees of the parent class
        super(num1, num2)
        this.num_3 = 10
    }

    // add(){
    //     return this.num_1 + this.num_2 + this.num_3
    // }

    details(){
        console.log("This is Add Class")
    }
}

class Sub extends Calculation {
    constructor(num1, num2){
        // will invoke the propertiees of the parent class
        super(num1, num2)
    }

    details(){
        console.log("This is Sub Class")
    }
}



var add = new Add(30, 20);
var sub = new Sub(40, 20);

console.log(add.details())
console.log(sub.details())

console.log(add.add())
console.log(sub.sub())



