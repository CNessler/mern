import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';

class Journey extends React.Component {
    render() {
        return (
            <Container id="container">
                <div className="img-journey">
                    <Row>
                        <Col sm="12" md={{ size: 4, offset: 4 }}>
                            <h3 style={{paddingTop:"2rem", paddingBottom:"1rem"}}>Things we know</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 4, offset: 4 }}>
                    <ListGroup>
                        <ListGroupItem header="">It will be in Keystone, Colorado</ListGroupItem>
                        <ListGroupItem header="">
                            It's on September 13, 2019.
                        </ListGroupItem>
                        <ListGroupItem header="">
                            Should start early and go late
                        </ListGroupItem>
                    </ListGroup>
                    </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 4, offset: 4 }}>
                            <h3 style={{paddingTop:"2rem"}}>More details to come!</h3>
                        </Col>
                    </Row>
                </div>
            </Container>

        )
    }
}

export default Journey;