import { Component } from 'react';
import './items_list_style.css';
import SearchItem from '../search_item/search_item';
import { ItemsListProps } from '../../interfaces/props_interfaces';
import { getPokes } from '../../api/getAllPokes';
import { PokeCall, PokeResult } from '../../interfaces/api_interfaces';

interface State extends PokeCall {}

class ItemsList extends Component<ItemsListProps, State> {
  constructor(props: ItemsListProps) {
    super(props);
    this.state = { results: [] };
  }

  componentDidMount() {
    this.setupConnection();
  }

  componentDidUpdate(prevProps: Readonly<ItemsListProps>) {
    const { searchValue } = this.props;
    if (searchValue !== prevProps.searchValue) {
      this.getSearchQueryData(searchValue.toLowerCase());
    }
  }

  async getSearchQueryData(searchValue: string) {
    const data = await getPokes(
      'https://pokeapi.co/api/v2/pokemon?limit=1302&offset=0',
    );
    const getResults = data.results;
    const filterResults = getResults.filter((elem: PokeResult) =>
      elem.name.includes(searchValue),
    );
    this.setState({ results: filterResults });
  }

  async setupConnection() {
    const data = await getPokes('https://pokeapi.co/api/v2/pokemon/');
    this.setState({ ...data });
    console.log(this.state);
  }

  render() {
    const { results } = this.state;
    return (
      <div className="items-list-container">
        {results.map((elem) => {
          return <SearchItem key={elem.url} name={elem.name} url={elem.url} />;
        })}
      </div>
    );
  }
}

export default ItemsList;
