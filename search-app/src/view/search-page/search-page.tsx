import { FormEvent, useState } from 'react';
import ItemsList from '../../components/items_list/items_list';
import './search-page-style.css';
import { PokeSearchValue } from '../../interfaces/api_interfaces';
import SearchBar from '../../components/search_bar/search_bar';

interface State extends PokeSearchValue {}

const searchValFromLS = localStorage.getItem('search-value');

function SearchPage() {
  const [searchPageState, setSearchPageState] = useState<State>({
    searchValue: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = new FormData(e.currentTarget).get('search-input');
    setSearchPageState({ searchValue: `${searchValue}` });
  };

  const { searchValue } = searchPageState;
  return (
    <div className="main-content-section">
      <h2>Poke Search</h2>
      <SearchBar searchValue={searchValFromLS} handleSubmit={handleSubmit} />
      <ItemsList searchValue={searchValue} />
    </div>
  );
}

export default SearchPage;
