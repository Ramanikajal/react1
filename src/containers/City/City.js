import React, { Component } from 'react';
export default class City extends Component {
    constructor(props) {
        super(props);

        console.log("in city con")
        this.state = {
            City: 'surat'
        };
    }

    ChangCity = () => {
        this.setState({
            City: 'rajkot'
        });
    }

    render() {
        return (
            <>
                <div> City:{this.state.City}</div>
                <botton onClick={() => this.ChangCity()}>CSheng</botton>
            </>
        );
    }
}


