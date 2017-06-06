'use strict';

import React from 'react';

export default class ButtonAdd extends React.Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <button id="butAdd" className="headerButton" onClick={""} aria-label="Add">
      </button>
    );
  }
}
