export interface PokeResult {
  name: string;
  url: string;
}

export interface PokeCall {
  results: PokeResult[];
}

export interface PokeStats {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokeData {
  species: {
    name: string;
    url: string;
  };

  stats: PokeStats[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}
