/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useNavigate, useParams } from 'react-router-dom';
import './search_item_style.css';
import PokemonStats from '../pokemon_stats/pokemon_stats';
import PokemonTypes from '../pokemon_types/pokemon_types';
import PokemonFlavorText from '../pokemon_flavor-text/pokemon_flavor-text';
import LoadingSpinner from '../loading_spinner/loading_spinner';
import { useGetPokemonByNameQuery } from '../../api/getPokemons';

function SearchItem() {
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
    <div id="detail" className="item-container">
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
      <button
        data-testid="close-btn"
        className="close-btn"
        onClick={handleClose}
        type="button"
      />
    </div>
  ) : null;
}

export default SearchItem;
