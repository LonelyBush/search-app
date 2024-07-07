export interface PokeResult {
  name: string;
  url: string;
}

export interface PokeSearchValue {
  searchValue: string;
}

export interface PokeCall {
  loading: boolean;
  results: PokeResult[];
}

export interface PokeStats {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokeType {
  type: {
    name: string;
  };
}

export interface PokeFlavor {
  language: {
    name: string;
  };
  flavor_text: string;
}

export interface PokeData {
  types: PokeType[];
  stats: PokeStats[];
  species: {
    url: string;
  };
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}

export interface PokeSpecies {
  flavor_text_entries: PokeFlavor[];
}
