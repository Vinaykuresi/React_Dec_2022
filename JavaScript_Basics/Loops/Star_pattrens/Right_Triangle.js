

/*
        *
       **
      ***
     ****
    *****
*/


var no_of_lines = 5;
var string = "";

// 0, 1, 2, 3, 4
for(let row = 0; row < no_of_lines; row++){

    0, 1, 2, 3
    for(let col = 0; col < no_of_lines-row-1; col++){
        string += " "
    }
    // 0, 1, 2, 3, 4
    for(let col = 0; col <= row; col++){
        // "**" += "*" -> "***"
        string += "*"
    }
    // "\n" -> line break
    string += "\n"
}

console.log(string)