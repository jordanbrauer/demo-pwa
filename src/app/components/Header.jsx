'use strict';

import React from 'react';
import ButtonRefresh from './buttons/Refresh.jsx';
import ButtonAdd from './buttons/Add.jsx';

export default class Header extends React.Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <header className="header">
        <h1 className="header__title">Weather PWA</h1>
        <ButtonRefresh />
        <ButtonAdd />
      </header>
    );
  }
}
