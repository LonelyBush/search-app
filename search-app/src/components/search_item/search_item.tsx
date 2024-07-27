/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import './search_item_style.css';
import PokemonStats from '../pokemon_stats/pokemon_stats';
import PokemonTypes from '../pokemon_types/pokemon_types';
import PokemonFlavorText from '../pokemon_flavor-text/pokemon_flavor-text';
import LoadingSpinner from '../loading_spinner/loading_spinner';
import { useGetPokemonByNameQuery } from '../../api/getPokemons';
import CloseBtn from '../ui/close_btn/close_btn';
import ThemeContext from '../../context/theme_context';

function SearchItem() {
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  const { pageNum, pokeName } = useParams();
  const { data, isLoading } = useGetPokemonByNameQuery(
    pokeName !== undefined ? pokeName : '',
  );
  const handleClose = () => {
    navigate(`/search/${pageNum}`);
  };
  return isLoading ? (
    <LoadingSpinner />
  ) : data ? (
    <div id="detail" className={`item-container ${theme}`}>
      <div className="poke-img-container">
        <img
          alt="pokemon-pic"
          src={data.sprites.other['official-artwork'].front_default}
        />
        <PokemonStats stats={data.stats} />
      </div>

      <div className="name-type-container">
        <h3>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h3>
        <PokemonTypes types={data.types} />
        {data.species.url === '' ? (
          <div>Loading...</div>
        ) : (
          <PokemonFlavorText name={data.name} />
        )}
      </div>
      <CloseBtn onClick={handleClose} />
    </div>
  ) : null;
}

export default SearchItem;
