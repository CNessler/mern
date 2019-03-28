import React, { Component } from 'react';
import Journey from './Journey';
import Deets from './Deets';
import Airport from './Airport';
import Registry from './Registry';
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
        this.state = {option:"", isOpen: false, activeItem: "", collapsed: true};
      }

    changeState(num, option) {
        this.setState({option: option, active: num});
        scroll.scrollTo(350);
    }

    render() {
        let data;
        if(this.state.option === "airport") {
            data = <Airport/>;
        } else if(this.state.option === "journey") {
            data = <Journey/>;
        } else if(this.state.option === "deets") {
            data = <Deets/>;
        } else if(this.state.option === "registry") {
            data = <Registry/>;
        }
        return (
            <div>
                <Navbar id="navbar" expand="sm" className="scrollTo">
                    <Container id="workPlease">
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar className="col-md-12">
                                <NavItem className="text-center col-md-3">
                                    <Button id="nav-btn deets" className="btn" onClick={() =>this.changeState(1, "deets")} active={this.state.active === 1}>The Deets</Button>
                                </NavItem>
                                <NavItem className="text-center col-md-3">
                                    <Button id="nav-btn" className="btn" role="button" onClick={() =>this.changeState(2, "journey")} active={this.state.active === 2}>Our Journey</Button>
                                </NavItem>
                                <NavItem className="text-center col-md-3">
                                    <Button id="nav-btn" className="btn" onClick={() =>this.changeState(3, "airport")} active={this.state.active === 3}>Lodge/Transport</Button>
                                </NavItem>
                                <NavItem className="text-center col-md-3">
                                    <Button id="nav-btn" className="btn" onClick={() =>this.changeState(4, "registry")} active={this.state.active === 4}>Registry</Button>
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