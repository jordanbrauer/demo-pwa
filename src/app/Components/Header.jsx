'use strict';

import React from 'react';
import ButtonRefresh from './Header/ButtonRefresh.jsx';
import ButtonAdd from './Header/ButtonAdd.jsx';

export default class Header extends React.Component {
  constructor (props) {
    super (props);
    this.toggleAddDialog = this.toggleAddDialog.bind(this);
    this.state = {};
  }

  toggleAddDialog (visible) {
    if (visible) {
      return this.classList.add('dialog-container--visible');
      // return this.setState({ active: true });
    }
    return this.classList.remove('dialog-container--visible');
    // return this.setState({ active: false });
  }

  // Iterate all of the cards and attempt to get the latest forecast data
  updateForecasts () {
    // var keys = Object.keys(app.visibleCards);
    // keys.forEach(function(key) {
    //   app.getForecast(key);
    // });
  }

  render () {
    return (
      <header className="header">
        <h1 className="header__title">Weather PWA</h1>
        <ButtonRefresh updateForecasts={this.updateForecasts} />
        <ButtonAdd toggleAddDialog={this.toggleAddDialog} />
      </header>
    );
  }
}
