import { Component, PropsWithChildren } from 'react';
import './items_list_style.css';
import { getPokes } from '../../api/getAllPokes';
import SearchItem from '../search_item/search_item';
import { PokeCall } from '../../interfaces/api_interfaces';

interface State extends PokeCall {}

class ItemsList extends Component<PropsWithChildren, State> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { results: [] };
  }

  async componentDidMount() {
    const data = await getPokes('https://pokeapi.co/api/v2/pokemon/');
    this.setState({ ...data });
  }

  render() {
    const { results } = this.state;
    return (
      <div className="items-list-container">
        {results.map((elem) => {
          return <SearchItem key={elem.name} name={elem.name} url={elem.url} />;
        })}
      </div>
    );
  }
}

export default ItemsList;
