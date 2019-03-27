import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';

class GoodToKnows extends React.Component {
    render() {
        return (
            <Container>
            <div>
                <div class="row" id="padding-top">
                        <div class="col-sm-12 mb-3 mt-3">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Helpful Information</h5>
                                    <p class="card-text">
                                        <ul>
                                            <li>
                                                Kids are welcome at all events
                                            </li>
                                            <li>
                                                It gets pretty chilly at night so some warm gear comes recommended
                                            </li>
                                            <li>
                                                Higher elevation = drink more water
                                            </li>
                                            <li>
                                                If you are looking for a hike check out <a href="https://www.alltrails.com/">AllTrails</a>
                                            </li>
                                            <li>
                                                
                                            </li>
                                        </ul>
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

export default GoodToKnows;