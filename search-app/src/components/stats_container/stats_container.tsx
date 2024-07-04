import { Component } from 'react';

import { StatsContainerProps } from '../../interfaces/props_interfaces';
import { iconCollection } from './icon_collection-const';
import './stats_container_style.css';

class StatsContainer extends Component<StatsContainerProps> {
  render() {
    const { stats } = this.props;
    const getOnlyMainStats = stats.filter((elem) => {
      return (
        elem.stat.name !== 'special-defense' &&
        elem.stat.name !== 'special-attack'
      );
    });
    return (
      <div className="stats-container">
        {getOnlyMainStats.map((elem) => {
          return (
            <div className="stat-block">
              <img
                className="stat-icon"
                src={iconCollection[elem.stat.name]}
                alt="stat-icon"
              />
              <div>{`${elem.base_stat}`}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default StatsContainer;
