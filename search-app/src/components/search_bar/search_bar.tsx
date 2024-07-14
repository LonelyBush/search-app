import { useState } from 'react';
import { SearchBarProps } from '../../interfaces/props_interfaces';
import './search_bar-style.css';

function SearchBar({ handleSubmit, searchValue }: SearchBarProps) {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <div className="search-bar-container">
      <h2>Poke Search</h2>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            onFocus={() => setFocus(true)}
            data-focused={focus.toString()}
            defaultValue={searchValue === null ? '' : searchValue}
            name="search-input"
            required
            type="text"
            pattern="^\S+$"
          />
          <span>
            *your search query must have no spaces and at least one character
          </span>
        </div>
        <button className="submit-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
