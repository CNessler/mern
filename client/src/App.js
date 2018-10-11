import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux';
import store from './store';
import ItemModal from './components/ItemModal';
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
        <AppNavbar/>
        <Container>
          <ItemModal />
          <ShoppingList/>
        </Container>
          <h1>it works</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
