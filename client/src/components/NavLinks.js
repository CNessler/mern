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
        this.state = {option:"", isOpen: false, activeItem: ""};
        // This binding is necessary to make `this` work in the callback
      }

    changeState(num, option) {
        this.setState({option: option, active: num});
    }

    render() {
        let data;
        if(this.state.option === "rsvp") {
            data = <Rsvp/>;
        } else if(this.state.option === "journey") {
            data = <Journey/>;
        }
        return (
            <div>
                <Navbar color="" expand="sm">
                    <Container id="workPlease">
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar className="col-md-12">
                                <NavItem className="col-md-4 text-center">
                                    <Button id="nav-btn deets" className="btn" role="button" onClick={() =>this.changeState(1, "deets")} active={this.state.active === 1}>The Deets</Button>
                                </NavItem>
                                <NavItem className="col-md-4 text-center">
                                    <Button id="nav-btn" className="btn" role="button" onClick={() =>this.changeState(2, "journey")} active={this.state.active === 2}>Our Journey</Button>
                                </NavItem>
                                <NavItem className="col-md-4 text-center">
                                    <Button id="nav-btn" className="btn" onClick={() =>this.changeState(3, "rsvp")} active={this.state.active === 3}>RSVP</Button>
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