import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';

class Deets extends React.Component {
    render() {
        return (
            <Container>
                <div id="spacing" className="container h-100">
                    <Row className="row h-100 justify-content-center align-items-center">
                        <Col sm="10">
                            <h4 id="detail-title">The Details</h4>
                                <Row id="details">
                                    <Col sm="1">
                                        <Row>Where: </Row>
                                        <Row>When: </Row>
                                        <Row>Attire: </Row>
                                    </Col>
                                    <Col sm="5">
                                        <Row>130 Kinnikinik Rd</Row>
                                        <Row>1:00PM - you can't dance no mo</Row>
                                        <Row>It will be outside so maybe ditch the heels if you want</Row>
                                    </Col>
                                </Row>

                            <h4 id="padding-top">How to get there</h4>
                                <p>
                                    There are a number of cab services you can book in advance. We recommend this route. However, if you
                                    want to drive there is parking at the local club house down the road. It is about a five minute walk
                                    from there to the house. We will have signs to assist any drivers.
                                </p>
                                <ol><a href="https://www.summitcove.com/taxi-services-summit-county/">Summit Cove Taxi</a></ol>
                                <ol><a href="http://453taxi.com/areas-we-serve/">453 Taxi</a></ol>
                                <ol><a href="http://www.jakesmountainshuttle.com/cant-find-a-taxi-or-uber.html">Jake's Mountain Shuttle</a></ol>
                        </Col>
                    </Row>
                </div>
            </Container>

        )
    }
}

export default Deets;