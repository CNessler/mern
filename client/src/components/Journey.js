import React, { Component } from 'react';
import journey from "../images/story.png";
import canyoning from "../images/canyoning.jpg";
import fourteener from "../images/14er.JPG";
import asheville from "../images/asheville.png";
import backpack from "../images/backpack.JPG";
import boxing from "../images/boxing.JPG";
import bryce from "../images/bryce.png";
import camino from "../images/camino.jpg";
import campglow from "../images/campglow.JPG";
import cinco from "../images/cinco.png";
import costaricabest from "../images/costaricabest.JPG";
import grad from "../images/grad.JPG";
import guy from "../images/guy.png";
import hike from "../images/hike.png";
import licking from "../images/licking.JPG";
import pride from "../images/pride.png";
import pride2 from "../images/pride2.png";
import sleeping from "../images/sleeping.JPG";
import moab from "../images/moab.jpg";
import nyc from "../images/nyc.png";
import telluride2 from "../images/telluride2.jpg";
import waterfall from "../images/waterfall.JPG";
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
                                <img class='img-card' src={campglow}></img>
                            </div>
                        </div>
                        <div class="col-sm-4 mb-2 mt-2">
                            <div class="card card-image">
                                <img class='img-card' src={nyc}></img>
                            </div>
                        </div>

                        <div class="col-sm-4 mb-2 mt-2">
                            <div class="card card-image">
                                <img class='img-card' src={bryce}></img>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 mb-2 mt-2">
                            <div class="card card-image">
                                <img class='img-card' src={cinco}></img>
                            </div>
                        </div>
                        <div class="col-sm-4 mb-2 mt-2">
                            <div class="card card-image">
                                <img class='img-card' src={moab}></img>
                            </div>
                        </div>

                        <div class="col-sm-4 mb-2 mt-2">
                            <div class="card card-image">
                                <img class='img-card' src={guy}></img>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 mb-2 mt-2">
                            <div class="card card-image">
                                <img class='img-card' src={hike}></img>
                            </div>
                        </div>
                        <div class="col-sm-4 mb-2 mt-2">
                            <div class="card card-image">
                                <img class='img-card' src={grad}></img>
                            </div>
                        </div>

                        <div class="col-sm-4 mb-2 mt-2">
                            <div class="card card-image">
                                <img class='img-card' src={sleeping}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        )
    }
}

export default Journey;