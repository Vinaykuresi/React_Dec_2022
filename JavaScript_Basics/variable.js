
// multiple time declare and assignment
var tempFarenheit = 99

console.log("Temperature in Farenheit : ", tempFarenheit)

var tempFarenheit = 50

console.log("Temperature in Farenheit : ", tempFarenheit)

// one time declare and assignment
const normal_temperature = 26

console.log("Normal Temperature : ", normal_temperature)

// TypeError: Assignment to constant variable.
// SyntaxError: Identifier 'normal_temperature' has already been declared
// normal_temperature = 30

// console.log("Normal Temperature : ", normal_temperature)

// one time declaration and multiple assignment
let temperature = 30

console.log("Temperature : ", temperature)

// SyntaxError: Identifier 'temperature' has already been declared
temperature = 25

console.log("Temperature : ", temperature)