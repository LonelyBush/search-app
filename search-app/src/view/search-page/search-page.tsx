import { FormEvent, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import ItemsList from '../../components/items_list/items_list';
import './search-page-style.css';
import { PokeSearchValue } from '../../interfaces/api_interfaces';
import SearchBar from '../../components/search_bar/search_bar';
import useSearchQuery from '../../hooks/useSearchQuery-hook';

interface State extends PokeSearchValue {}

function SearchPage() {
  const { searchQueryFromLS } = useSearchQuery();
  const navigate = useNavigate();
  const [searchPageState, setSearchPageState] = useState<State>({
    searchValue: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = new FormData(e.currentTarget).get('search-input');
    setSearchPageState({ searchValue: `${searchValue}` });
    navigate('/search/1');
  };

  useEffect(() => {
    if (searchQueryFromLS.length === 0) {
      setSearchPageState({ searchValue: '' });
    } else {
      setSearchPageState({ searchValue: searchQueryFromLS });
    }
  }, [searchQueryFromLS]);
  const { searchValue } = searchPageState;
  return (
    <div className="main-content-section">
      <div className="side-bar-section">
        <SearchBar
          searchValue={searchQueryFromLS}
          handleSubmit={handleSubmit}
        />
        <ItemsList searchValue={searchValue} />
      </div>
      <Outlet />
    </div>
  );
}

export default SearchPage;
