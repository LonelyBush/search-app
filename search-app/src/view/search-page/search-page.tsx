import { FormEvent, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import ItemsList from '../../components/items_list/items_list';
import styles from './search-page-style.module.css';
import { PokeSearchValue } from '../../interfaces/api_interfaces';
import SearchBar from '../../components/search_bar/search_bar';
import useSearchQuery from '../../hooks/useSearchQuery-hook';
import ThemeContext from '../../context/theme_context';

interface State extends PokeSearchValue {}

function SearchPage() {
  const { searchQueryFromLS } = useSearchQuery();
  const [theme, setTheme] = useState<string>('');
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
    <ThemeContext.Provider value={theme}>
      <div
        className={`${styles[`main-content-section`]} ${styles[`${theme}`]}`}
      >
        <div className={styles['side-bar-section']}>
          <SearchBar
            searchValue={searchQueryFromLS}
            handleSubmit={handleSubmit}
            setTheme={setTheme}
          />
          <ItemsList searchValue={searchValue} />
        </div>
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
}

export default SearchPage;
