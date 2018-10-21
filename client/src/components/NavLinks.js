import React, { Component } from 'react';
import Rsvp from './Rsvp';
import Journey from './Journey';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Button
} from 'reactstrap';

class NavLinks extends Component {
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    constructor(props) {
        super(props);
        this.state = {info: "", journey:false, isOpen: false};
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
        var view = document.getElementById('workPlease');
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
            <div>
                <Navbar color="dark" expand="sm">
                    <Container id="workPlease">
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar className="col-md-12">
                                <NavItem className="col-md-4 text-center">
                                    <Button id="nav-btn" className="btn" onClick={this.details}>The Deets</Button>
                                </NavItem>
                                <NavItem className="col-md-4 text-center">
                                    <Button id="nav-btn" className="btn" onClick={this.journey}>Our Journey</Button>
                                </NavItem>
                                <NavItem className="col-md-4 text-center">
                                    <Button id="nav-btn" className="btns" onClick={this.rsvp}>RSVP</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                <Container>
                    {data}
                </Container>
            </div>
        )
    }
}

export default NavLinks;