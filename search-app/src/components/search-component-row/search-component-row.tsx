import { NavLink } from 'react-router-dom';
import { SearchRowComponentProps } from '../../interfaces/props_interfaces';
import './search-component-row-style.css';
import pokeballStatic from '../../../assets/pics/pokeball.png';
import { useGetPokemonByNameQuery } from '../../api/getPokemons';

function SearchComponentRow({ name }: SearchRowComponentProps) {
  const { data, isLoading } = useGetPokemonByNameQuery(name);

  return (
    <div className="search-row-container">
      <NavLink
        to={`detail/${name}`}
        className={({ isActive }) =>
          isActive ? 'search-row-content active' : 'search-row-content'
        }
      >
        {isLoading ? (
          <img
            className="loading-prop-img"
            src={pokeballStatic}
            alt="pokeball"
          />
        ) : (
          <img
            className="small-poke-img"
            src={data ? data.sprites.front_default : null}
            alt="small-poke-img"
          />
        )}
        <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
        <span>&#9658;</span>
      </NavLink>
    </div>
  );
}

export default SearchComponentRow;
