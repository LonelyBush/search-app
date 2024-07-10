import { useEffect, useState } from 'react';
import { PokemonFlavorProps } from '../../interfaces/props_interfaces';
import { PokeSpecies } from '../../interfaces/api_interfaces';
import { getPokes } from '../../api/getAllPokes';

function PokemonFlavorText({ url }: PokemonFlavorProps) {
  const [flavorEntries, setFlavorEntries] = useState<PokeSpecies>({
    flavor_text_entries: [],
  });

  const { flavor_text_entries } = flavorEntries;
  const firstEn = flavor_text_entries.find(
    (elem) => elem.language.name === 'en',
  );
  useEffect(() => {
    const componentDidMount = async () => {
      const data = await getPokes(`${url}`);
      setFlavorEntries({ ...data });
    };
    componentDidMount();
  }, [url]);

  return (
    <div className="flavor-text">
      {firstEn !== undefined
        ? firstEn.flavor_text.replace('\f', ' ')
        : 'Sorry :c No text provided'}
    </div>
  );
}

export default PokemonFlavorText;
