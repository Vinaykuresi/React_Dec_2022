
// local and global scope

// global scope

/*
var num1 = 20

function def(){
    // local scope
    var num2 = 30
    console.log(num1)
    console.log(num2)
    // global variable
    num3 = 50
}

def()
console.log(num1)
console.log(num3)
// console.log(num2)
*/

// var counter = 0

function increaseCounter(){
    let counter = 0

    // inner function or Nested Functions

    function plus(){
        counter += 1
        console.log(counter)
    }

    plus()

}

// increaseCounter()
// increaseCounter()
// increaseCounter()

// JavaScript Clouser or Self Invoking fucntion

const add = (function (){
    // private variable
    let counter = 0;
    return function () {
        counter += 1
        return counter
    }
})();

console.log(add())
console.log(add())
console.log(add())

