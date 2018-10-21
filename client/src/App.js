import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { Container } from 'reactstrap';
import Background from './components/Background';
import NavLinks from './components/NavLinks';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        <Background></Background>
        <NavLinks />
        <Container>
        </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
