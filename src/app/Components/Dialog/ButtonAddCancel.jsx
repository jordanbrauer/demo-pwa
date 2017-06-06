'use strict';

import React from 'react';

export default class ButtonAddCancel extends React.Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <button id="butAddCancel" className="button">Cancel</button>
    );
  }
}
