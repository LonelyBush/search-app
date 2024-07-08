import { Component } from 'react';
import './items_list_style.css';
import SearchItem from '../search_item/search_item';
import { ItemsListProps } from '../../interfaces/props_interfaces';
import { getPokes } from '../../api/getAllPokes';
import { PokeCall, PokeResult } from '../../interfaces/api_interfaces';
import LoadingSpinner from '../loading_spinner/loading_spinner';
import EmptySearchResult from '../empry-search-result/empty-search-result';

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
    localStorage.setItem('search-value', searchValue);
    this.setState({ loading: true });
    const changedQuery = searchValue.trim().toLowerCase();
    getPokes('https://pokeapi.co/api/v2/pokemon?limit=120&offset=0').then(
      (data) => {
        this.setState({ loading: false });
        const getResults = data.results;
        const filterResults = getResults.filter((elem: PokeResult) =>
          elem.name.includes(changedQuery),
        );
        this.setState({ results: filterResults });
      },
    );
  }

  setupConnection() {
    const getQueryFromLS = localStorage.getItem('search-value');
    if (getQueryFromLS !== null) {
      this.getSearchQueryData(getQueryFromLS);
    } else {
      this.setState({ loading: true });
      getPokes('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0').then((data) => {
        this.setState({ loading: false });
        this.setState({ ...data });
      });
    }
  }

  render() {
    const { results, loading } = this.state;
    let itemListComponent;
    if (results.length === 0) {
      itemListComponent = <EmptySearchResult />;
    } else {
      itemListComponent = results.map((elem) => {
        return <SearchItem key={elem.url} name={elem.name} url={elem.url} />;
      });
    }

    return (
      <div className="items-list-container">
        {loading ? <LoadingSpinner /> : itemListComponent}
      </div>
    );
  }
}

export default ItemsList;
