import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './Missions.css';

class Missions extends Component {
  render() {
    return (
      <div className="main" data-testid="missions">
        <Title headline="Missões" />
        <div className="missions">
          {missions.map((mission) => (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
