import { Component } from 'react';
import './search_item_style.css';
import { getPokes } from '../../api/getAllPokes';
import PokemonStats from '../pokemon_stats/pokemon_stats';
import { PokeData } from '../../interfaces/api_interfaces';
import { SearchItemProps } from '../../interfaces/props_interfaces';
import PokemonTypes from '../pokemon_types/pokemon_types';

interface State extends PokeData {}

class SearchItem extends Component<SearchItemProps, State> {
  constructor(props: SearchItemProps) {
    super(props);
    this.state = {
      types: [],
      species: {
        name: '',
        url: '',
      },
      stats: [],
      sprites: {
        other: {
          'official-artwork': {
            front_default: '',
          },
        },
      },
    };
  }

  async componentDidMount() {
    const { url } = this.props;
    const data = await getPokes(url);
    this.setState({ ...data });
    console.log(this.state);
  }

  render() {
    const { name } = this.props;
    const { sprites, stats, types } = this.state;
    console.log(this.state);
    return (
      <div className="item-container">
        <img
          alt="pokemon-pic"
          src={sprites.other['official-artwork'].front_default}
        />
        <div className="name-type-container">
          <h3>{name.charAt(0).toUpperCase() + name.slice(1)}u</h3>
          <PokemonTypes types={types} />
        </div>

        <div className="flavor-text">
          Possesses cheek sacs in which it stores electricity. This clever
          forest-dweller roasts tough berries with an electric shock before
          consuming them.
        </div>
        <PokemonStats stats={stats} />
      </div>
    );
  }
}

export default SearchItem;
