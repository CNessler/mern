import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';

class Airport extends React.Component {
    render() {
        return (
            <Container>
            <div>
            <div class="row" id="padding-top">
                <div class="col-sm-6 mb-3 mb-md-0">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Where To Stay</h5>
                        <p class="card-text">
                            Our wedding is technically in Keystone, CO. However, it is almost centered between Keystone and Frisco. 
                            We plan on spending more time in Frisco but you are free to choose wherever you would like to stay.
                            The location of the wedding is 130 Kinnikinik Rd Keystone, CO to help plan your visit.
                        </p>
                        <a href="https://www.airbnb.com/" class="btn btn-primary btn-sm">Airbnb</a>
                        <a href="https://www.vrbo.com/" class="btn btn-primary btn-sm">VRBO</a>
                        <a href="https://www.keystoneresort.com/" class="btn btn-primary btn-sm">Keystone Resort</a>
                    </div>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Airport Transportation</h5>
                            <p class="card-text">
                                For those not renting a car, there are a number of options to get to Frisco or Keystone. 
                                We would recommend one of the following shuttles and would discourage using Uber or Lyft (it's Hella expensive to the mountains).
                            </p>
                            <div class="text-center">
                            <a href="https://www.summitexpress.com/scheduled-shuttle-service/denver-airport-to-frisco-co-shuttle/" class="btn btn-primary btn-sm transportation-width">Summit Express</a>
                            <a href="https://www.mountainshuttle.com/shuttle-services/frisco/" class="btn btn-primary btn-sm transportation-width">Mountain Shuttle</a>
                            <a href="https://www.epicmountainexpress.com/shuttle-rates" class="btn btn-primary btn-sm transportation-width">Epic Mountain Express</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
            <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Local Transportation</h5>
                            <p class="card-text">
                                Where there is a will there is a way!

                                There are multiple local busses that run in Frisco and Keystone for FREE. Check them
                                out <a href="https://www.summitcountyco.gov/586/Transit-Summit-Stage">here</a>.
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

export default Airport;