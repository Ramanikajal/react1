import React, { Component } from 'react';
class Time extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date()        // 1constructro set int value
        }

        console.log("con");
    }
    tick = () => {
        this.setState({
            time: new Date()
        })
    }
    componentDidMount = () => {
        //3 use this method for requst data toserver
        this.timeId = setInterval(() => this.tick(), 1000);
    }
    //4 coll previos state and current is not mach
    componentDidUpdate =(prevprops,prevstate)=>{
        if(prevstate.time !== this.state,Time){
            console.log("componentdid update")
        }
    }
    //5 componentdidmounr used to realse resrum form 
    componentWillUnmount =()=>{
        clearInterval(this.timeId);
    }
    //2 coll redder method state value cheng
    render() {
        return (
            <div>
                {this.state.time.toLocaleTimeString()}
            </div>
        );
    }
}

export default Time;