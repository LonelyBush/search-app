import { FormEvent, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import ItemsList from '../../components/items_list/items_list';
import './search-page-style.css';
import { PokeSearchValue } from '../../interfaces/api_interfaces';
import SearchBar from '../../components/search_bar/search_bar';

interface State extends PokeSearchValue {}

const searchValFromLS = localStorage.getItem('search-value');

function SearchPage() {
  const navigate = useNavigate();
  const { pageNum, pokeName } = useParams();
  const [searchPageState, setSearchPageState] = useState<State>({
    searchValue: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = new FormData(e.currentTarget).get('search-input');
    setSearchPageState({ searchValue: `${searchValue}` });
    navigate('/1');
  };

  const { searchValue } = searchPageState;
  return (
    <div className="main-content-section">
      <div
        className="side-bar-section"
        onClick={() => {
          if (pokeName) navigate(`/search/${pageNum}`);
        }}
      >
        <SearchBar searchValue={searchValFromLS} handleSubmit={handleSubmit} />
        <ItemsList searchValue={searchValue} />
      </div>
      <Outlet />
    </div>
  );
}

export default SearchPage;
