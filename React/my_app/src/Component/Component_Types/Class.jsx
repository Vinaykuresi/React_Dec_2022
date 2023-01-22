import '../../App.css';
// import './style.css';
import React from 'react';

// internal styling
// external styling
// inline styling
const custom_styling = {
    form : {
        border: "2px solid",
        display: "block",
        position: "absolute",
        top: "30%",
        left: "40%",
    }
}

class Styling extends React.Component {
  constructor(){
    super();
    this.state = {
        button_value : "Login",
        username : "",
        password : ""
    }
  }

  login = () => {
    window.alert(`Login Successful : ${this.state.username}`)
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name] : event.target.value
    })
  }

  render(){

    return(
            <form style={custom_styling.form}>
                <div>
                    <label for="username">Username</label>
                    <input name="username" id='username' value={this.state.username} onChange={this.handleChange} type={"text"} />
                </div>
                <div>
                    <label for="password">Password</label>
                    <input name="password" id='password' type={"password"} />
                </div>
                <div>
                    <input style={{fontFamily:"cursive", fontStyle:"italic"}} type={"button"} onClick={this.login} value={this.state.button_value} />
                </div>
            </form>
    )
}
}

export default Styling
