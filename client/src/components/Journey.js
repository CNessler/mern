import React, { Component } from 'react';
import journey from "../images/story.png";
import canyoning from "../images/canyoning.jpg";
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';

class Journey extends React.Component {
    render() {
        return (
            <Container>
                <div className="img-journey">
                    <img class='img-fluid w-90' src={journey}></img>
                </div>
                <div class="card-deck">
                    <div class="row">
                        <div class="col-sm-4 mb-2 mt-2">
                            <div class="card card-image">
                                <img class='img-card' src={canyoning}></img>
                            </div>
                        </div>
                        <div class="col-sm-4 mb-2 mt-2">
                            <div class="card card-image">
                                <img class='img-card' src={canyoning}></img>
                            </div>
                        </div>

                        <div class="col-sm-4 mb-2 mt-2">
                            <div class="card card-image">
                                <img class='img-card' src={canyoning}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        )
    }
}

export default Journey;