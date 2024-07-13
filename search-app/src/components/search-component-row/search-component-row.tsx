import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getPokes } from '../../api/getAllPokes';
import { SearchRowComponentProps } from '../../interfaces/props_interfaces';
import './search-component-row-style.css';

function SearchComponentRow({ url, name }: SearchRowComponentProps) {
  const [getImgUrl, setGetImgUrl] = useState<string>('');

  useEffect(() => {
    const callForPoke = async () => {
      const response = await getPokes(url);
      const getImg = response.sprites.front_default;
      setGetImgUrl(getImg);
    };
    callForPoke();
  }, [url]);
  return (
    <div className="search-row-container">
      <NavLink
        to={`detail/${name}`}
        className={({ isActive }) =>
          isActive ? 'search-row-content active' : 'search-row-content'
        }
      >
        <img className="small-poke-img" src={getImgUrl} alt="small-poke-img" />
        <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
        <span>&#9658;</span>
      </NavLink>
    </div>
  );
}

export default SearchComponentRow;
