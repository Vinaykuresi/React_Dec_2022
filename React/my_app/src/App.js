import logo from './logo.svg';
import './App.css';
import React from 'react';
import JSX from './Component/JSX/code';
import CondtionalRendering from './Component/Conditional_Rendering/conditional_rendering';
import Styling from './Component/Forms/forms';

class App extends React.Component {
  constructor(){
    super();
  }

  render(){

    return (
      <div>
        <Styling/>
          {/* <CondtionalRendering /> */}
          {/* <JSX/> */}
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       {React.createElement("h1", {}, "This is our first react class")}
//       <h1>This is our first react class</h1>
//     </div>
//   );
// }

export default App;
