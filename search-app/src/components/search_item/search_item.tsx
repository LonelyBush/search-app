import { useEffect, useState } from 'react';
import './search_item_style.css';
import { getPokes } from '../../api/getAllPokes';
import PokemonStats from '../pokemon_stats/pokemon_stats';
import { PokeData } from '../../interfaces/api_interfaces';
import { SearchItemProps } from '../../interfaces/props_interfaces';
import PokemonTypes from '../pokemon_types/pokemon_types';
import PokemonFlavorText from '../pokemon_flavor-text/pokemon_flavor-text';

function SearchItem({ url, name }: SearchItemProps) {
  const [data, setPokeData] = useState<PokeData>({
    types: [],
    stats: [],
    species: {
      url: '',
    },
    sprites: {
      other: {
        'official-artwork': {
          front_default: '',
        },
      },
    },
  });
  useEffect(() => {
    const callForPoke = async () => {
      const response = await getPokes(url);
      setPokeData({ ...response });
    };
    callForPoke();
  }, [url]);
  const { sprites, stats, types, species } = data;
  return (
    <div className="item-container">
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
