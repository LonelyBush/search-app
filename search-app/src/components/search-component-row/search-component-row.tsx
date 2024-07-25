import { NavLink } from 'react-router-dom';
import { ChangeEvent, useContext, useState } from 'react';
import { SearchRowComponentProps } from '../../interfaces/props_interfaces';
import './search-component-row-style.css';
import pokeballStatic from '../../../assets/pics/pokeball.png';
import { useGetPokemonByNameQuery } from '../../api/getPokemons';
import ThemeContext from '../../context/theme_context';
import CheckBox from '../ui/check_box/check_box';

function SearchComponentRow({ name, id }: SearchRowComponentProps) {
  const { data, isLoading } = useGetPokemonByNameQuery(name);
  const [check, setCheck] = useState<boolean>(false);
  const HandleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(check);
    setCheck(e.currentTarget.checked);
  };
  const theme = useContext(ThemeContext);
  return (
    <div className="search-row-container">
      <NavLink
        to={`detail/${name}`}
        className={({ isActive }) =>
          isActive
            ? `search-row-content ${theme} active`
            : `search-row-content ${theme}`
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
      </NavLink>
      <CheckBox name={name} id={`${name}-${id}`} onChange={HandleOnChange} />
    </div>
  );
}

export default SearchComponentRow;
