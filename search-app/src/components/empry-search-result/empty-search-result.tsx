import { Component } from 'react';
import psyduckImg from '../../../assets/pics/Psyduck.png';
import './empty-search-result-style.css';

class EmptySearchResult extends Component {
  render() {
    return (
      <div className="empty-result-container">
        <div className="empty-result-text">
          <span>Ohh no... there is no such pokemon according your query.</span>
          <span>Try again, please...</span>
        </div>
        <img className="empty-result-img" src={psyduckImg} alt="psyduch-img" />
      </div>
    );
  }
}

export default EmptySearchResult;
