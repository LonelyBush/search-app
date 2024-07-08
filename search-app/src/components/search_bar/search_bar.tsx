import { Component } from 'react';
import { SearchBarProps } from '../../interfaces/props_interfaces';

class SearchBar extends Component<SearchBarProps> {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="search-bar-container">
        <form onSubmit={handleSubmit}>
          <input name="search-input" required type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
