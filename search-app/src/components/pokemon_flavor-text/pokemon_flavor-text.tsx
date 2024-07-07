import { Component } from 'react';
import { PokemonFlavorProps } from '../../interfaces/props_interfaces';
import { PokeSpecies } from '../../interfaces/api_interfaces';
import { getPokes } from '../../api/getAllPokes';

interface State extends PokeSpecies {}

class PokemonFlavorText extends Component<PokemonFlavorProps, State> {
  constructor(props: PokemonFlavorProps) {
    super(props);
    this.state = {
      flavor_text_entries: [],
    };
  }

  async componentDidMount() {
    const { url } = this.props;
    const data = await getPokes(`${url}`);
    this.setState({ ...data });
  }

  render() {
    const { flavor_text_entries } = this.state;
    const firstEn = flavor_text_entries.find(
      (elem) => elem.language.name === 'en',
    );
    return (
      <div className="flavor-text">
        {firstEn !== undefined
          ? firstEn.flavor_text.replace('\f', ' ')
          : 'Sorry :c No text provided'}
      </div>
    );
  }
}

export default PokemonFlavorText;
