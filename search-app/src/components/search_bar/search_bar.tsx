import { Component } from 'react';
import { SearchBarProps } from '../../interfaces/props_interfaces';
import './search_bar-style.css';

class SearchBar extends Component<SearchBarProps> {
  render() {
    const { handleSubmit, searchValue } = this.props;
    return (
      <div className="search-bar-container">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
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
            Search em All!
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
