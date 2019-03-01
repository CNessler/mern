import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';

class Deets extends React.Component {
    render() {
        return (
            <Container>
            <div>
            <div class="row" id="padding-top">
                <div class="col-sm-6 mb-3 mb-md-0">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Wedding Day Details</h5>
                        <p class="card-text">
                            <Row id="details">
                                <Col sm="2">
                                    <Row>Where: </Row>
                                    <Row>When: </Row>
                                    <Row>Attire: </Row>
                                </Col>
                                <Col sm="8">
                                    <Row>130 Kinnikinik Rd</Row>
                                    <Row>1:00PM - you can't dance no mo</Row>
                                    <Row>It will be outside so maybe ditch the heels if you want</Row>
                                </Col>
                            </Row>
                        </p>
                    </div>
                    </div>
                </div>

        <div class="col-sm-6">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">How To Get There</h5>
                <p class="card-text">
                    There are a number of cab services you can book in advance. We recommend this route. However, if you
                    want to drive there is parking at the local club house down the road. It is about a five minute walk
                    from there to the house. We will have signs to assist any drivers.
                </p>
                <a href="https://www.summitcove.com/taxi-services-summit-county/" class="btn btn-primary btn-sm">Summit Cove Taxi</a>
                <a href="http://453taxi.com/areas-we-serve/" class="btn btn-primary btn-sm">453 Taxi</a>
                <a href="http://www.jakesmountainshuttle.com/cant-find-a-taxi-or-uber.html" class="btn btn-primary btn-sm">Jake's Mountain Shuttle</a>
            </div>
            </div>
        </div>
        </div>
            </div>
            </Container>
        )
    }
}

export default Deets;