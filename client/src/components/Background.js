import title from '../images/title.png';
import back from '../images/background.JPG';
import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Background extends Component {

    render() {
        return (
            <div id="container-fluid">
                <img src={back} className="img-responsive" style={{height:"auto", width:"100%"}}/>
            </div>
        )
    }
}

export default Background;