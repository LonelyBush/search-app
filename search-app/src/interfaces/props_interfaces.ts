import { PokeStats, PokeType } from './api_interfaces';

export interface SearchItemProps {
  name: string;
  url: string;
}

export interface StatsContainerProps {
  stats: PokeStats[];
}

export interface PokemonTypesProps {
  types: PokeType[];
}

export interface PokemonFlavorProps {
  name: string;
}
