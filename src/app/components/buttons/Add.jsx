'use strict';

import React from 'react';

export default class ButtonAdd extends React.Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <button id="butAdd" className="headerButton" aria-label="Add"></button>
    );
  }
}
