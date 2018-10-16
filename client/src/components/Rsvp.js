import React, { Component } from 'react';
import { Container,Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import { addRsvp } from '../actions/rsvpAction';
import { connect } from 'react-redux';

class Rsvp extends Component {

    constructor() {
        super();

        this.state = {
            attending : true
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const rsvp = {
            name: this.state.name,
            attending: this.state.attending
        }

        // Add rsvp via addRsvp action
        this.props.addRsvp(rsvp)
    }

    handleRadioChange = (e) => {
        this.setState({ 
            attending : e.target.value
        })
    }

    render() {
        return(
                <Container>
                    <Form onSubmit={this.onSubmit}>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <FormGroup>
                                    <Label for="item">Name</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="guest"
                                        placeholder="Add guest"
                                        onChange={this.onChange}
                                    ></Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" 
                                            name="attending" 
                                            value="yes" 
                                            checked={this.state.attending === "yes"} 
                                            onChange={this.handleRadioChange}/>
                                        Wouldn't Miss It For The World
                                    </Label>
                                    <Label check>
                                        <Input type="radio" 
                                            name="attending"
                                            value="no" 
                                            checked={this.state.attending === "no"} 
                                            onChange={this.handleRadioChange}/>
                                        I'll Celebrate From Afar
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <FormGroup>
                                    <Button
                                        color="light"
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

export default connect(mapStateToProps, { addRsvp })(Rsvp);