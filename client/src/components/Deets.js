import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';

class Journey extends React.Component {
    render() {
        return (
            <Container id="container">
                <Row>
                    <Col sm="12">
                    <h2>The Details</h2>
                    <h5>Where:</h5><span> 130 Kinnikinik Rd Keyston, CO</span>
                    <h5>When:</h5><span>1:00PM - you can't dance no mo</span>
                    <h5>What to wear:</h5><span>It will be outside so maybe ditch the heels if you want</span>
                    <h5>Food:</h5><span>We'll feed ya</span>
                    <h5>Drinks:</h5><span>Hope you like IPA's</span>

                    <h2>How to get there</h2>
                    <p>
                        There are a number of cab services you can book in advance. We recommend this route. However, if you
                        want to drive there is parking at the local club house down the road. It is about a five minute walk
                        from there to the house. We will have signs to assist any drivers.
                    </p>
                    </Col>
                </Row>
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
            </Container>

        )
    }
}

export default Journey;