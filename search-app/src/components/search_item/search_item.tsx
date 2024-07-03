import { Component } from 'react';
import './search_item_style.css';
import hpIcon from '../../../assets/icon/heart-icon.svg';
import defIcon from '../../../assets/icon/shield-icon.svg';
import atackIcon from '../../../assets/icon/sword-icon.svg';
import speedIcon from '../../../assets/icon/wing-icon.svg';

class SearchItem extends Component {
  render() {
    return (
      <div className="item-container">
        <img
          alt="pokemon-pic"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        />
        <div className="name-type-container">
          <h3>Pikachu</h3>
          <div className="pokemon-type">
            <p>Type:</p>
            <span>&#9889;</span>
            <p>Electric</p>
          </div>
        </div>

        <div className="flavor-text">
          Possesses cheek sacs in which it stores electricity. This clever
          forest-dweller roasts tough berries with an electric shock before
          consuming them.
        </div>

        <div className="stats-container">
          <div className="stat-block">
            <img className="stat-icon" src={hpIcon} alt="stat-icon" />
            <div>45</div>
          </div>
          <div className="stat-block">
            <img className="stat-icon" src={defIcon} alt="stat-icon" />
            <div>50</div>
          </div>
          <div className="stat-block">
            <img className="stat-icon" src={atackIcon} alt="stat-icon" />
            <div>30</div>
          </div>
          <div className="stat-block">
            <img className="stat-icon" src={speedIcon} alt="stat-icon" />
            <div>70</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchItem;
