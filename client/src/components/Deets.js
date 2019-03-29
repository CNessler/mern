import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';

class Deets extends React.Component {
    render() {
        return (
            <Container>
            <div>
                <div class="row" id="padding-top">
                    <div class="col-sm-6 mb-3 mb-md-0">
                        <div class="card" id="full-height">
                        <div class="card-body">
                            <h5 class="card-title">Friday the 13th: We're Getting Married!</h5>
                            <p class="card-text">
                                <Row id="details">
                                    <Col sm="12">
                                        <Row><b>Where:</b> 130 Kinnikinik Rd</Row>
                                        <Row><b>When:</b> 1:00PM - you can't dance no mo</Row>
                                        <Row><b>Who:</b> Everyone! Kids are welcome at all events</Row>
                                        <Row><b>Attire:</b> It will be outside so maybe ditch the heels if you want</Row>
                                    </Col>
                                </Row>
                            </p>
                        </div>
                        </div>
                    </div>
                <div class="col-sm-6 mb-3 mb-md-0">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Saturday the 14th: Explore</h5>
                        <p class="card-text">
                            <ul>
                                <li>
                                    Hike on the Colorado Trail at 9:30AM
                                </li>
                                <li>
                                    After hike beers at Highside Brewery ~12:00PM
                                </li>
                                <li>
                                    Lake Dillon is across the street with a playground and/or boat rentals for those
                                    interested
                                </li>
                                <li>
                                    Walk Main St. to check out the town
                                </li>
                            </ul>
                            More to come on the exact hiking trail. Also, please note this is not a hosted event
                            and everyone is responsible for their own tab.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 mb-3 mt-3">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Sunday the 15th: Chill</h5>
                        <p class="card-text">
                            We will be hanging out at the house. Come over, grab some food, relax in the hot tub,
                            drink some drinks. This is all about R&R with friends and family. The more the merrier.
                        </p>
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