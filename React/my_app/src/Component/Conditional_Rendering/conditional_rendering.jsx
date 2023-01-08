import '../../App.css';
import React from 'react';

class CondtionalRendering extends React.Component {
  constructor(){
    super();
  }

  render(){

    let logged = false 
    let element = null

    if(logged){
        element = <h1>Welcome Admin</h1>
    }else{
        element = <h1>Please Login</h1>
    }

    return (
      <div className="App">
        {element}
      </div>
    )
  }
}


export default CondtionalRendering;
