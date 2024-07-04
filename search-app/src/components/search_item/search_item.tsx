import { Component } from 'react';
import './search_item_style.css';
import { getPokes } from '../../api/getAllPokes';
import StatsContainer from '../stats_container/stats_container';
import { PokeData } from '../../interfaces/api_interfaces';
import { SearchItemProps } from '../../interfaces/props_interfaces';

interface State extends PokeData {}

class SearchItem extends Component<SearchItemProps, State> {
  constructor(props: SearchItemProps) {
    super(props);
    this.state = {
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
    const { sprites, stats } = this.state;
    console.log(this.state);
    return (
      <div className="item-container">
        <img
          alt="pokemon-pic"
          src={sprites.other['official-artwork'].front_default}
        />
        <div className="name-type-container">
          <h3>{name.charAt(0).toUpperCase() + name.slice(1)}u</h3>
          <div className="pokemon-type">
            <p>Type:</p>
            <span>&#9889;</span>
            <p>Electric</p>
          </div>
        </div>

        <div className="flavor-text">
          Possesses cheek sacs in which it stores electricity. This clever
          forest-dweller roasts tough berries with an electric shock before
          consuming them.
        </div>
        <StatsContainer stats={stats} />
      </div>
    );
  }
}

export default SearchItem;
