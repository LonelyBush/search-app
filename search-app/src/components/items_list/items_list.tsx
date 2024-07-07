import { Component } from 'react';
import './items_list_style.css';
import SearchItem from '../search_item/search_item';
import { ItemsListProps } from '../../interfaces/props_interfaces';
import { getPokes } from '../../api/getAllPokes';
import { PokeCall, PokeResult } from '../../interfaces/api_interfaces';
import LoadingSpinner from '../loading_spinner/loading_spinner';

interface State extends PokeCall {}

class ItemsList extends Component<ItemsListProps, State> {
  constructor(props: ItemsListProps) {
    super(props);
    this.state = { results: [], loading: false };
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

  getSearchQueryData(searchValue: string) {
    this.setState({ loading: true });
    getPokes('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20').then(
      (data) => {
        this.setState({ loading: false });
        const getResults = data.results;
        const filterResults = getResults.filter((elem: PokeResult) =>
          elem.name.includes(searchValue),
        );
        this.setState({ results: filterResults });
      },
    );
  }

  setupConnection() {
    this.setState({ loading: true });
    getPokes('https://pokeapi.co/api/v2/pokemon/').then((data) => {
      this.setState({ loading: false });
      this.setState({ ...data });
    });
  }

  render() {
    const { results, loading } = this.state;
    return (
      <div className="items-list-container">
        {loading ? (
          <LoadingSpinner />
        ) : (
          results.map((elem) => {
            return (
              <SearchItem key={elem.url} name={elem.name} url={elem.url} />
            );
          })
        )}
      </div>
    );
  }
}

export default ItemsList;
