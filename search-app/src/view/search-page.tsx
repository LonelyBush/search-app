import { Component } from 'react';
import SearchItem from '../components/search_item/search_item';

class SearchPage extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <button type="button">Submit</button>
        <SearchItem />
      </div>
    );
  }
}

export default SearchPage;
