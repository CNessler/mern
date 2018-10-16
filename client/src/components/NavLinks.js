import React, { Component } from 'react';
import Rsvp from './Rsvp';
import Journey from './Journey';

class NavLinks extends Component {

    constructor(props) {
        super(props);
        this.state = {info: "", journey:false};
        // This binding is necessary to make `this` work in the callback
        this.details = this.details.bind(this);
        this.journey = this.journey.bind(this);
        this.rsvp = this.rsvp.bind(this);
      }
      
    details() {
        this.setState({info : "apple", journey:false});
        var view = document.getElementById('nav');
        view.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    journey() {
        this.setState({journey: true});
        var view = document.getElementById('nav');
        view.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    rsvp() {
        this.setState({rsvp: true, journey: false});
        var view = document.getElementById('nav');
        view.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    render() {
        let data;
        if(this.state.rsvp === true) {
            data = <Rsvp/>;
        } else if(this.state.journey === true) {
            data = <Journey/>;
        }
        return (
            <div className="container">
                <div className="row">
                    <div id="nav" className="col-md-4 text-center">
                        <button id="nav-btn" onClick={this.details} type="button" className="btn btn-outline-success">The Deets</button>
                    </div>
                    <div id="nav" className="col-md-4 text-center">
                        <button id="nav-btn" onClick={this.journey} type="button" className="btn btn-outline-success">Our Journey</button>
                    </div>
                    <div id="nav" className="col-md-4 text-center">
                        <button id="nav-btn" onClick={this.rsvp} type="button" className="btn btn-outline-success">RSVP</button></div>
                </div>
                <div className="row">
                    {data}
                    <div>{this.state.info}</div>
                </div>
            </div>
        )
    }
}

export default NavLinks;