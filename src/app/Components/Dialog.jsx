'use strict';

import React from 'react';
import ButtonAddCity from './Dialog/ButtonAddCity.jsx';
import ButtonAddCancel from './Dialog/ButtonAddCancel.jsx';

export default class DialogContainer extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      visible: false
    };
  }

  render () {
    return (
      <div className="dialog-container">
        <div className="dialog">
          <div className="dialog-title">Add new city</div>
          <div className="dialog-body">
            <select id="selectCityToAdd">
              {/*
              <!-- Values map to Yahoo Weather API Where On Earth Identifiers (WOEIDs).
              https://developer.yahoo.com/weather/documentation.html#req -->
              */}
              <option value="2357536">Austin, TX</option>
              <option value="2367105">Boston, MA</option>
              <option value="2379574">Chicago, IL</option>
              <option value="2459115">New York, NY</option>
              <option value="2475687">Portland, OR</option>
              <option value="2487956">San Francisco, CA</option>
              <option value="2490383">Seattle, WA</option>
            </select>
          </div>
          <div className="dialog-buttons">
            <ButtonAddCity />
            <ButtonAddCancel />
          </div>
        </div>
      </div>
    );
  }
}
