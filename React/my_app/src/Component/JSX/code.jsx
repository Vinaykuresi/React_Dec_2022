import '../../App.css';
import React from 'react';

var num1 = 3
var num2 = 4
var name = "Vinay"
var name = {
  firstName : "Vinay",
  lastName : "Kuresi"
}

class JSX extends React.Component {
  constructor(){
    super();
  }

  render(){

    let name_style = {
      color : "green",
      backgroundColor : "grey"
    }

    // nameStyle -> pascal case
    // name_style -> camel case
    // NameStyle 
    return (
      <div className="App">
        {React.createElement("h1", {}, "This is our first react class")}
        <h1>This is our first react class</h1>
        <h1>{ 2 * 2}</h1>
        <h1>{ num1 > num2 ? "num1 is greater" : "num1 is lesser" }</h1>
        <h1 style={name_style}>Happy birthday {name.firstName} {name.lastName}</h1>
      </div>
    )
  }
}


export default JSX;
