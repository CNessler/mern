import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';

class Registry extends React.Component {
    render() {
        return (
            <Container>
            <div>
                <div class="row" id="padding-top">
                        <div class="col-sm-12 mb-3 mt-3">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Registry Stuff</h5>
                                    <p class="card-text">
                                        <p>Please know your presence is our most invaluable gift. Seeing the ones we love 
                                            matters most and creating new memories with you will last forever. If you would like,
                                            or have the means these are some items/experiences we would like.
                                        </p>
                                        <div class="text-center">
                                            <a href='https://www.paypal.com/pools/c/8dofBxsI8u'class="btn btn-primary btn-sm">Honeymoon fund</a>
                                            <a href='https://www.amazon.com/wedding/share/CandCmountainwedding' class="btn btn-primary btn-sm">Amazon registry</a>
                                            <a href='https://www.myregistry.com/rei/wedding-registry/Claire-Nessler-and-Colleen-Jacobs-Denver-CO/1899704' class="btn btn-primary btn-sm">REI registry</a>
                                        </div>
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

export default Registry;