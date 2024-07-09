import { Component } from 'react';
import {
  SearchBarProps,
  SearchBarState,
} from '../../interfaces/props_interfaces';
import './search_bar-style.css';

interface State extends SearchBarState {}
class SearchBar extends Component<SearchBarProps, State> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      focus: false,
    };
  }

  render() {
    const { handleSubmit, searchValue, triggerError } = this.props;
    const { focus } = this.state;
    return (
      <div className="search-bar-container">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              onFocus={() => this.setState({ focus: true })}
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
            Search em All!
          </button>
          <button onClick={triggerError} className="submit-btn" type="button">
            Error
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
