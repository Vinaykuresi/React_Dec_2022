
import React from "react";
import Updates from "../Updating/updates";

class TimerUnMount extends React.Component{
    constructor(){
        super();
        this.state ={
            secondsElapsed : 0
        }
    }

    start = () => {
        this.setState({
            secondsElapsed : this.state.secondsElapsed + 1
        })
    }

    componentDidMount(){
        this.interval = setInterval(this.start, 1000)
    }

    componentWillUnmount(){
        console.log("Component Will Unmount")
        clearInterval(this.interval)
    }

    render(){
        return(
            <div>
                {/* <h2>Timer : {this.state.secondsElapsed}</h2> */}
                <Updates time={this.state.secondsElapsed} />
            </div>
        )
    }
}

export default TimerUnMount;