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
                                        <Row><b>Where: &nbsp;</b> <a href='https://www.google.com/maps/place/130+Kinnikinnik+Rd,+Dillon,+CO+80435/@39.5904673,-105.9951747,17z/data=!3m1!4b1!4m5!3m4!1s0x876a59ed51d73b03:0x2f6c3baf456bbfe8!8m2!3d39.5904673!4d-105.992986' target="_blank">130 Kinnikinik Rd, Keystone CO</a></Row>
                                        <Row><b>When: &nbsp;</b> 4PM - 11:00</Row>
                                        <Row><b>Who: &nbsp;</b> Everyone! Kids are welcome at all events</Row>
                                        <Row><b>Attire: &nbsp;</b> Mostly outside so chic but practical</Row>
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
                                    Hike Rainbow Lakes Trail outside of Frisco
                                    <ul>
                                        <li><a href="https://www.google.com/maps/place/Rainbow+Lake+Trailhead/@39.5728056,-106.0996389,16z/data=!4m18!1m12!4m11!1m6!1m2!1s0x876a5e9750296981:0xd8548ba4397f4cbf!2sHighSide+Brewing,+Main+Street,+Frisco,+CO!2m2!1d-106.0928118!2d39.5763608!1m3!2m2!1d-106.09869!2d39.56886!3m4!1s0x876a5e8d85e02eed:0x742926aa06e49970!8m2!3d39.5689514!4d-106.0997933" target="_blank"
                                                >trailhead </a> </li>
                                        <li><a href="https://www.alltrails.com/trail/us/colorado/rainbow-lake" target="_blank"
                                                >details </a> </li>
                                    </ul>
                                </li>
                                <li>
                                    After hike beers at <a href="https://www.google.com/maps/place/HighSide+Brewing/@39.5763608,-106.0928118,15z/data=!4m5!3m4!1s0x0:0xd8548ba4397f4cbf!8m2!3d39.5763608!4d-106.0928118" target="_blank"
                                                >Highside Brewery </a>  1:30PM
                                </li>
                                <li>
                                    Lake Dillon is across the street with a playground and/or boat rentals for those
                                    interested
                                </li>
                                <li>
                                    Walk Main St. to check out the town
                                </li>
                            </ul>
                            
                                        
                            Please note this is not a hosted event
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
                        <h5 class="card-title">Sunday the 15th: BBQ & Chill</h5>
                        <p class="card-text">
                            We will be hanging out at the house. Come over to hang or before your head out, grab some food, relax in the hot tub,
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