import { StatsContainerProps } from '../../interfaces/props_interfaces';
import { iconCollection } from './icon_collection-const';
import './pokemon_stats_style.css';

function PokemonStats({ stats }: StatsContainerProps) {
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
          <div key={elem.stat.name} className="stat-block">
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

export default PokemonStats;
