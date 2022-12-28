
// Date
var dateObject1 = new Date()
undefined

dateObject1
Wed Dec 28 2022 08:31:35 GMT+0530 (India Standard Time)

dateObject1.getDate()
28
dateObject1.getTime()
1672196495433
// from 1/1/1970 at 12 am
undefined
seconds = Math.floor(dateObject1.getTime()/1000)
1672196495
minutes = Math.floor(seconds/60)
27869941
hours = Math.floor(minutes/60)
464499


// String
var name = "Rahul"
undefined
name.length
5
name.charAt("u")
'R'
name.charAt('h')
'R'
name.charAt('2')
'h'
name.indexOf('h')
2