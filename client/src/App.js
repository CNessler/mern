import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'reactstrap';
import Background from './components/Background';
import NavLinks from './components/NavLinks';

class App extends Component {
  render() {
    return (
        <div className="App">
        <Background></Background>
        <NavLinks />
        <Container>
        </Container>
        </div>
    );
  }
}

export default App;
