import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { addPokemon, removePokemon } from '../../redux_slice/redux_slice';
import { SearchRowComponentProps } from '../../interfaces/props_interfaces';
import './search-component-row-style.css';
import pokeballStatic from '../../../assets/pics/pokeball.png';
import { useGetPokemonByNameQuery } from '../../api/getPokemons';
import ThemeContext from '../../context/theme_context';
import CheckBox from '../ui/check_box/check_box';
import { RootState } from '../../store/store';

function SearchComponentRow({ name, id }: SearchRowComponentProps) {
  const store = useSelector((state: RootState) => state.pokeStore);
  const dispatch = useDispatch();
  const { data, isLoading } = useGetPokemonByNameQuery(name);
  const [checked, setChecked] = useState<boolean>(false);
  const HandleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    const createJson = {
      id,
      name,
      height: data.height,
      experience: data.base_experience,
    };
    dispatch(
      e.currentTarget.checked
        ? addPokemon(createJson)
        : removePokemon(createJson),
    );
  };
  useEffect(() => {
    setChecked(store.find((elem) => elem.name === name) !== undefined);
  }, [store]);

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
      <CheckBox
        theme={theme}
        checked={checked}
        name={name}
        id={`${name}-${id}`}
        onChange={HandleOnChange}
      />
    </div>
  );
}

export default SearchComponentRow;
