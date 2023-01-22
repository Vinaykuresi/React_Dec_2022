import logo from './logo.svg';
import './App.css';
import React from 'react';
import JSX from './Component/JSX/code';
import CondtionalRendering from './Component/Conditional_Rendering/conditional_rendering';
// import Styling from './Component/Forms/forms';
import AjaxDataHandling from './Component/Axios/Ajax_and_Axios';
import Timer from './Component/Life_Cycle_Methods/Mounting/timer';
import Styling from "./Component/Component_Types/Class";
import FunctionComponent from './Component/Component_Types/Function';

class App extends React.Component {
  constructor(){
    super();
  }

  render(){

    return (
      <div>
        {/* <Styling/> */}
        {/* <Styling/> */}
          {/* <CondtionalRendering /> */}
          {/* <JSX/> */}
          {/* <AjaxDataHandling /> */}
          {/* <Timer /> */}
          <FunctionComponent />
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
