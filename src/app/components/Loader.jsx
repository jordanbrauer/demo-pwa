'use strict';

import React from 'react';

export default class Loader extends React.Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    const {viewBox, width, height, cx, cy, rad, fill} = this.props;
    return (
      <div className="loader">
      <svg viewBox={viewBox||"0 0 32 32"} width={width||32} height={height||32}>
          <circle id="spinner" cx={cx||16} cy={cy||16} r={rad||14} fill={fill||"none"}></circle>
        </svg>
      </div>
    );
  }
}
