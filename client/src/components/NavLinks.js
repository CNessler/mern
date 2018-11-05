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
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class NavLinks extends Component {
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    
    constructor() {
        super();
        this.state = {option:"", isOpen: false, activeItem: ""};
      }

    changeState(num, option) {
        this.setState({option: option, active: num});
        scroll.scrollTo(350);
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
                <Navbar id="navbar" expand="sm" className="scrollTo">
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
                <Container id="work">
                    {data}
                </Container>
            </div>
        )
    }
}

export default NavLinks;