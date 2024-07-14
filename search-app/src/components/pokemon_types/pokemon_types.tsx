import { PokemonTypesProps } from '../../interfaces/props_interfaces';
import './pokemon_types_style.css';

function PokemonTypes({ types }: PokemonTypesProps) {
  return (
    <div className="pokemon-type-container">
      <p>Type:</p>
      {types.map((elem) => {
        const { type } = elem;
        return (
          <div key={type.name} className={`type-icon type-${type.name}`}>
            {type.name.slice(0, 3)}
          </div>
        );
      })}
    </div>
  );
}

export default PokemonTypes;
