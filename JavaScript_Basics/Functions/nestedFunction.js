
function giveMessage(message){

    var userMsg = message;

    function greeting(username){

        var name = username
        var greet = message + " " + name

        return greet
    }

    userMsg = greeting("Nandheesha")
    
    return userMsg

}

var message = giveMessage("Happy Birthday")

console.log(message)

