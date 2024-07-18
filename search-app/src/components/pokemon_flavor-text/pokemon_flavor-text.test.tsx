import { describe, expect, it } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import PokemonFlavorText from './pokemon_flavor-text';

describe('PokemonFlavorText', () => {
  it('Should render with data after passing mock url', async () => {
    const mockUrl = 'https://pokeapi.co/api/v2/pokemon-species/4/';
    const { getByText } = render(<PokemonFlavorText url={mockUrl} />);
    await waitFor(() => {
      const flavorText = getByText(/obviously prefers hot places/i);
      expect(flavorText).toBeDefined();
    });
  });
});
