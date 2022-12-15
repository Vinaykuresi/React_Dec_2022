
var num1 = 1

var company = "Garuda Careers"
// console.log(company)

company = 'Garuda Careers'
// console.log(company)

// SyntaxError: Unexpected identifier
company = "Garuda Career's"
// console.log(company)

// dynamic usage
company = `Garuda Careers ${num1}`
// console.log(company)

console.log("String length : ",company.length)

// indexed
console.log(company[15])
console.log(company[0])