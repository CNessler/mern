import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';

class Airport extends React.Component {
    render() {
        return (
            <Container>
                <div id="spacing" className="container h-100">
                    <Row className="row h-100 justify-content-center align-items-center">
                        <Col sm="10">
                            <h4>Where to stay</h4>
                                <p>
                                    Our wedding is technically in Keystone, CO. However, it is almost centered between Keystone and Frisco. 
                                    We plan on spending more time in Frisco but you are free to choose wherever you would like to stay.
                                    The location of the wedding is 130 Kinnikinik Rd Keystone, CO to help plan your visit.
                                </p>
                                We would recommend:
                                <ol><a href="https://www.airbnb.com/">Airbnb</a></ol>
                                <ol><a href="https://www.vrbo.com/">VRBO</a></ol>
                                <ol><a href="https://www.keystoneresort.com/">Keystone Resort</a></ol>

                            <h4>Airport Transportation</h4>
                                <p>
                                    For those not renting a car, there are a number of options to get to Frisco or Keystone. 
                                    We would recommend one of the following shuttles and would discourage using Uber or Lyft (it's Hella expensive to the mountains).
                                </p>
                                    <h5>Here are a few shuttle options for Frisco or Keystone</h5>
                                    <ol><a href="https://www.summitexpress.com/scheduled-shuttle-service/denver-airport-to-frisco-co-shuttle/">Summit Express</a></ol>
                                    <ol><a href="https://www.mountainshuttle.com/shuttle-services/frisco/">Mountain Shuttle</a></ol>
                                    <ol><a href="https://www.freshtrackstransportation.com/denver-international-airport-to-frisco/">Fresh Tracks Transportation</a></ol>
                                    <ol><a href="https://www.epicmountainexpress.com/shuttle-rates">Epic Mountain Express</a></ol>
                            <h4>How the hell do I get around?</h4>
                                <p>
                                    Where there is a will there is a way.

                                    There are multiple local busses that run in Frisco and Keystone for FREE. Check them
                                    out <a href="https://www.summitcountyco.gov/586/Transit-Summit-Stage">here</a>.
                                </p>
                        </Col>
                    </Row>
                    
                </div>
            </Container>

        )
    }
}

export default Airport;