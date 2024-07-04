import { PokeStats } from './api_interfaces';

export interface SearchItemProps {
  name: string;
  url: string;
}

export interface StatsContainerProps {
  stats: PokeStats[];
}
