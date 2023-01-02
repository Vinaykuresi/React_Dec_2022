var myArray = [1, "Vinay", "Rahul", 2.4, true]
undefined
myArray[2]
'Rahul'
myArray.length
5
myArray.push("Kumar")
6
myArray
(6) [1, 'Vinay', 'Rahul', 2.4, true, 'Kumar']
myArray.pop()
'Kumar'
myArray
(5) [1, 'Vinay', 'Rahul', 2.4, true]
myArray.splice(2, 0, "kumar")
[]
myArray
(6) [1, 'Vinay', 'kumar', 'Rahul', 2.4, true]0: 11: "Vinay"2: "kumar"3: "Rahul"4: 2.45: truelength: 6[[Prototype]]: Array(0)
myArray.forEach(item => {
    console.log("Items : ", item)
})
VM1034:2 Items :  1
VM1034:2 Items :  Vinay
VM1034:2 Items :  kumar
VM1034:2 Items :  Rahul
VM1034:2 Items :  2.4
VM1034:2 Items :  true