import React, { Component } from 'react';
import { Container,Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import { addRsvp } from '../actions/rsvpAction';
import { resetStore } from '../actions/rsvpAction';
import { connect } from 'react-redux';
import Success from './Success';
import OtherPlans from './OtherPlans';

class Rsvp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            attending : "yes",
            name: "",
            songOne: "",
            songTwo: ""
        }
        this.props.resetStore();
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const rsvp = {
            name: this.state.name,
            attending: this.state.attending,
            songOne: this.state.songOne,
            songTwo: this.state.songTwo
        }
        // Add rsvp via addRsvp action
        this.props.addRsvp(rsvp);
        this.setState({
                    name: "",
                    attending: "",
                    songOne: "",
                    songTwo: ""
                  });
    }

    handleRadioChange = (e) => {
        this.setState({ 
            attending : e.target.value
        })
    }

    render() {
        const test = this.props.rsvp.rsvp;
        let response;
        let error = "There was an error saving your RSVP. Please try again or contact one of the brides.";;
        if(test) {
            test.map((rsvp) => 
            response = rsvp.attending === true ? <Success/> : <OtherPlans/>);
            
        }
        return(
                
                <Container id="container">
                    {response}
                    <Form onSubmit={this.onSubmit} id="rsvpForm">
                        <Row>
                            <Col sm="12" md={{ size: 4, offset: 4 }}>
                                <FormGroup>
                                    <Label for="item">Name</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="guest"
                                        value={this.state.name}
                                        placeholder="Add guest"
                                        onChange={this.onChange}
                                    ></Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" md={{ size: 4, offset: 4 }}>
                            <FormGroup tag="fieldset">
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" 
                                            name="attending" 
                                            value="yes" 
                                            checked={this.state.attending === "yes"} 
                                            onChange={this.handleRadioChange}/>
                                        Wouldn't Miss It For The World
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" 
                                            name="attending"
                                            value="no"
                                            checked={this.state.attending === "no"} 
                                            onChange={this.handleRadioChange}/>
                                        I'll Celebrate From Afar
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" md={{ size: 4, offset: 4 }}>
                            <FormGroup tag="fieldset">
                                <Label for="item">Favorite Dancing Songs</Label>
                                    <Input
                                        type="text"
                                        name="songOne"
                                        id="songOne"
                                        value={this.state.songOne}
                                        placeholder="Song One"
                                        onChange={this.onChange}
                                    ></Input>
                            </FormGroup>
                            <FormGroup>
                                    <Input
                                        type="text"
                                        name="songTwo"
                                        id="songTwo"
                                        value={this.state.songTwo}
                                        placeholder="Song Two"
                                        onChange={this.onChange}
                                    ></Input>
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" md={{ size: 4, offset: 4 }}>
                                <FormGroup>
                                    <Button
                                        style={{marginTop: '2rem'}}
                                        block
                                    >Cheers!
                                    </Button>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </Container>
        )
    }
}

const mapStateToProps = state => ({
    rsvp: state.rsvp
})

export default connect(mapStateToProps, { addRsvp, resetStore })(Rsvp);