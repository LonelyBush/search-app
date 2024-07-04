import { Component } from 'react';
import ItemsList from '../components/items_list/items_list';

class SearchPage extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <button type="button">Submit</button>
        <ItemsList />
      </div>
    );
  }
}

export default SearchPage;
