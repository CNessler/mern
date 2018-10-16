import title from '../images/title.png';
import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Background extends Component {

    render() {
        return (
            <div id="parent">
            <Jumbotron id="wrapperHeader" className="img-fluid">
                <div>
                    <img src={title} className="title"></img>
                </div>
            </Jumbotron>
            </div>
        )
    }
}

export default Background;