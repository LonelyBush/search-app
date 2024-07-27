import { useContext } from 'react';
import { StatsContainerProps } from '../../interfaces/props_interfaces';
import { darkIconCollection, iconCollection } from './icon_collection-const';
import './pokemon_stats_style.css';
import ThemeContext from '../../context/theme_context';

function PokemonStats({ stats }: StatsContainerProps) {
  const theme = useContext(ThemeContext);
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
              src={
                theme === 'dark'
                  ? darkIconCollection[elem.stat.name]
                  : iconCollection[elem.stat.name]
              }
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
