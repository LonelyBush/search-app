/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { removeAllPokemons } from '../../redux_slice/redux_slice';
import { SearchBarProps } from '../../interfaces/props_interfaces';
import './search_bar-style.css';
import CloseBtn from '../ui/close_btn/close_btn';
import useSearchQuery from '../../hooks/useSearchQuery-hook';
import ToggleSwitch from '../ui/toggle_switch/toggle_switch';
import ThemeContext from '../../context/theme_context';
import { RootState } from '../../store/store';

function SearchBar({ handleSubmit, searchValue, setTheme }: SearchBarProps) {
  const posts = useSelector((state: RootState) => state.pokeStore);
  const dispatch = useDispatch();
  const { setSearchQueryToLS } = useSearchQuery();
  const [queryState, setQueryState] = useState<string>('');
  const [focus, setFocus] = useState<boolean>(false);
  const theme = useContext(ThemeContext);
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQueryState(e.currentTarget.value);
  };
  const handleOnChangeSwitch = (e: ChangeEvent<HTMLInputElement>) => {
    setTheme(e.currentTarget.checked ? 'dark' : '');
  };
  const handleClearAll = () => {
    dispatch(removeAllPokemons());
  };

  useEffect(() => {
    setQueryState(searchValue!);
  }, [searchValue]);
  return (
    <div className={`search-bar-container ${theme}`}>
      <div className="title-section">
        <h2>Poke Search</h2>
        <ToggleSwitch onChange={handleOnChangeSwitch} />
      </div>

      <form className="search-form" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            onFocus={() => setFocus(true)}
            onChange={handleOnChange}
            data-focused={focus.toString()}
            value={queryState}
            name="search-input"
            type="text"
            pattern="^\S+$"
          />
          <span>
            *your search query must have no spaces and at least one character
          </span>
          {queryState !== '' && focus ? (
            <CloseBtn
              onClick={() => {
                setFocus(false);
                setQueryState('');
                setSearchQueryToLS('');
              }}
            />
          ) : null}
        </div>
        <button className={`submit-btn ${theme}`} type="submit">
          Search
        </button>
      </form>
      {posts.length !== 0 ? (
        <div className="counter-section">
          <div className="items-counter">{`${posts.length} items`}</div>
          <button
            onClick={handleClearAll}
            className={`submit-btn ${theme}`}
            type="button"
          >
            Clear All
          </button>
          <button className={`submit-btn ${theme}`} type="button">
            Download
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default SearchBar;
