import { Component } from 'react';
import './loading_spinner_style.css';

class LoadingSpinner extends Component {
  render() {
    return (
      <div className="loader-component">
        <div className="pokeball-container">
          <div className="pokeball-btn" />
        </div>
      </div>
    );
  }
}

export default LoadingSpinner;
