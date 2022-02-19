import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MissionsCard.css';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="mission" data-testid="mission-card">
        <h3 className="m-name" data-testid="mission-name">{ name }</h3>
        <p className="m-year" data-testid="mission-year">{ year }</p>
        <p className="m-country" data-testid="mission-country">{ country }</p>
        <p className="m-destination" data-testid="mission-destination">{ destination }</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
}.isRequired;

export default MissionCard;
