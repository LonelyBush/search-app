import { Component } from 'react';
import './search_item_style.css';
import { getPokes } from '../../api/getAllPokes';
import PokemonStats from '../pokemon_stats/pokemon_stats';
import { PokeData } from '../../interfaces/api_interfaces';
import { SearchItemProps } from '../../interfaces/props_interfaces';
import PokemonTypes from '../pokemon_types/pokemon_types';
import PokemonFlavorText from '../pokemon_flavor-text/pokemon_flavor-text';

interface State extends PokeData {}

class SearchItem extends Component<SearchItemProps, State> {
  constructor(props: SearchItemProps) {
    super(props);
    this.state = {
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
    };
  }

  componentDidMount() {
    this.callForPoke();
  }

  callForPoke = async () => {
    const { url } = this.props;
    const data = await getPokes(url);
    this.setState({ ...data });
  };

  render() {
    const { name } = this.props;
    const { sprites, stats, types, species } = this.state;
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
}

export default SearchItem;
