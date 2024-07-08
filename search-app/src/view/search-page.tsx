import React, { Component, FormEvent, PropsWithChildren } from 'react';
import ItemsList from '../components/items_list/items_list';
import './search-page-style.css';
import { PokeSearchValue } from '../interfaces/api_interfaces';
import SearchBar from '../components/search_bar/search_bar';

interface State extends PokeSearchValue {}

const searchValFromLS = localStorage.getItem('search-value')

class SearchPage extends Component<PropsWithChildren, State> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { searchValue: '' };
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = new FormData(e.currentTarget).get('search-input');
    this.setState({
      searchValue: `${searchValue}`,
    });
  };

  render() {
    const { searchValue } = this.state;
    return (
      <div className="main-content-section">
        <h2>Poke Search</h2>
        <SearchBar searchValue={searchValFromLS} handleSubmit={this.handleSubmit} />
        <ItemsList searchValue={searchValue} />
      </div>
    );
  }
}

export default SearchPage;
