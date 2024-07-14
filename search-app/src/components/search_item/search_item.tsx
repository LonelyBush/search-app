/* eslint-disable jsx-a11y/control-has-associated-label */
import { useNavigate, useParams } from 'react-router-dom';
import './search_item_style.css';
import { useEffect, useState } from 'react';
import PokemonStats from '../pokemon_stats/pokemon_stats';
import { PokeData } from '../../interfaces/api_interfaces';
import PokemonTypes from '../pokemon_types/pokemon_types';
import PokemonFlavorText from '../pokemon_flavor-text/pokemon_flavor-text';
import LoadingSpinner from '../loading_spinner/loading_spinner';
import { getPokes } from '../../api/getAllPokes';

function SearchItem() {
  const [pokeData, setPokeData] = useState<PokeData>({
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
    name: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { pageNum, pokeName } = useParams();
  const handleClose = () => {
    navigate(`/${pageNum}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await getPokes(
        `https://pokeapi.co/api/v2/pokemon/${pokeName}`,
      );
      setLoading(false);
      setPokeData({ ...response });
    };
    fetchData();
  }, [pokeName]);
  const { sprites, stats, types, species, name } = pokeData;

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div id="detail" className="item-container">
      <div className="poke-img-container">
        <img
          alt="pokemon-pic"
          src={sprites.other['official-artwork'].front_default}
        />
        <PokemonStats stats={stats} />
      </div>

      <div className="name-type-container">
        <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
        <PokemonTypes types={types} />
        {species.url === '' ? (
          <div>Loading...</div>
        ) : (
          <PokemonFlavorText url={species.url} />
        )}
      </div>
      <button className="close-btn" onClick={handleClose} type="button" />
    </div>
  );
}

export default SearchItem;
