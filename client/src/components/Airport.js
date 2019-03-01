import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';

class Airport extends React.Component {
    render() {
        return (
            <Container>
            <div>
            <div class="row" id="padding-top">
                <div class="col-md-6 mb-4">
                    <div class="card" id="full-height">
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

                <div class="col-md-6 mb-4">
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
            <div class="row" id="padding-bottom">
                <div class="col-md-6 mb-4">
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
                <div class="col-md-6 mb-4">
                        <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Wedding Day Transportation</h5>
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

export default Airport;
