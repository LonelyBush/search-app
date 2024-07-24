/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { SearchBarProps } from '../../interfaces/props_interfaces';
import './search_bar-style.css';
import CloseBtn from '../ui/close_btn/close_btn';
import useSearchQuery from '../../hooks/useSearchQuery-hook';
import ToggleSwitch from '../ui/toggle_switch/toggle_switch';
import ThemeContext from '../../context/theme_context';

function SearchBar({ handleSubmit, searchValue, setTheme }: SearchBarProps) {
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
    </div>
  );
}

export default SearchBar;
