'use strict';

import React from 'react';

export default class ButtonRefresh extends React.Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <button id="butRefresh" className="headerButton" aria-label="Refresh"></button>
    );
  }
}
