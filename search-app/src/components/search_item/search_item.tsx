import { useLoaderData, useNavigation } from 'react-router-dom';
import './search_item_style.css';
import PokemonStats from '../pokemon_stats/pokemon_stats';
import { PokeData } from '../../interfaces/api_interfaces';
import PokemonTypes from '../pokemon_types/pokemon_types';
import PokemonFlavorText from '../pokemon_flavor-text/pokemon_flavor-text';
import LoadingSpinner from '../loading_spinner/loading_spinner';

function SearchItem() {
  const navigation = useNavigation();
  const data = useLoaderData() as PokeData;
  const { sprites, stats, types, species, name } = data;
  return navigation.state === 'loading' ? (
    <LoadingSpinner />
  ) : (
    <div id="detail" className="item-container">
      <img
        alt="pokemon-pic"
        src={sprites.other['official-artwork'].front_default}
      />
      <div className="name-type-container">
        <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
        <PokemonTypes types={types} />
      </div>
      {species.url === '' ? (
        <div>Loading...</div>
      ) : (
        <PokemonFlavorText url={species.url} />
      )}
      <PokemonStats stats={stats} />
    </div>
  );
}

export default SearchItem;
