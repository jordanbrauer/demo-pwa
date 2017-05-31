'use strict';

import React from 'react';
import Loader from './Loader.jsx';
import Header from './Header.jsx';

export default class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      isLoading: true,
      visibleCards: {},
      selectedCities: [],
      spinner: document.querySelector('.loader'),
      cardTemplate: document.querySelector('.cardTemplate'),
      container: document.querySelector('.main'),
      addDialog: document.querySelector('.dialog-container'),
      daysOfWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    };
  }

  render () {
    return (
      <div className="app">
        <Header />
        <Loader />
      </div>
    );
  }
}
