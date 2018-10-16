import React, { Component } from 'react';
import journey from "../images/journey.png";
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';

class Journey extends React.Component {
    render() {
        return (
            <Container>
                <div className="img-journey">
                    <img src={journey}></img>
                </div>
            </Container>

        )
    }
}

export default Journey;