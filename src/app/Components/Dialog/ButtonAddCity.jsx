'use strict';

import React from 'react';

export default class ButtonAddCity extends React.Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <button id="butAddCity" className="button">Add</button>
    );
  }
}
