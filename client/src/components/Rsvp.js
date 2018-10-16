import React, { Component } from 'react';
import { Container,Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
            <div>
                <Container>
                    <Form onSubmit={this.onSubmit}>
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
                        <FormGroup>
                            <Label check>
                                <Input type="radio" 
                                       name="attending" 
                                       value="yes" 
                                       checked={this.state.attending === "yes"} 
                                       onChange={this.handleRadioChange}/>
                                Wouldn't Miss It For The World
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Label check>
                                <Input type="radio" 
                                       name="attending"
                                       value="no" 
                                       checked={this.state.attending === "no"} 
                                       onChange={this.handleRadioChange}/>
                                I'll Celebrate From Afar
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Button
                                color="light"
                                style={{marginTop: '2rem'}}
                                block
                            >Cheers!
                            </Button>
                        </FormGroup>
                    </Form>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    rsvp: state.rsvp
})

export default connect(mapStateToProps, { addRsvp })(Rsvp);