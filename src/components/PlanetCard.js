import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlanetCard.css';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="planet-card" data-testid="planet-card">
        <p className="planet-title" data-testid="planet-name">{ planetName }</p>
        <img
          className="planet-image"
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
