import React, { Component } from 'react'

export default class Country extends Component {
    constructor(props) {
        super(props);

        console.log("in co");

        this.state = {
            Country:'india'
        };
    }
        ChangeCountry = () => {
            this.setState({
                Country:'uk'
            });
        }
    
    
    render(){
        return (
            <>
                <div>Country: {this.state.Country}</div>
                <button onClick={() => this.ChangeCountry()}>cheng</button>
            </>
        );
    }
}
