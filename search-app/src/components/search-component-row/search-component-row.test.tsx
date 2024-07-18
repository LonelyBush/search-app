import { describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import SearchComponentRow from './search-component-row';
import pokeball from '../../../assets/pics/pokeball.png';

const defaultData = {
  name: 'Charizard',
  url: 'https://pokeapi.co/api/v2/pokemon/charizard',
};

describe('Renders row with charizard without breaking', async () => {
  it('Renders without breaking', async () => {
    render(
      <MemoryRouter initialEntries={['/search/1']}>
        <SearchComponentRow name={defaultData.name} url={defaultData.url} />,
      </MemoryRouter>,
    );
    await waitFor(() => {
      expect(screen.getByText(/charizard/i)).toBeInTheDocument();
    });
  });
  it('Check for image loader component', () => {
    const { getByAltText } = render(
      <MemoryRouter initialEntries={['/search/1']}>
        <SearchComponentRow name={defaultData.name} url={defaultData.url} />,
      </MemoryRouter>,
    );
    const image = getByAltText('pokeball');
    expect(image).toHaveAttribute('src', pokeball);
  });
  it('Renders image from API', async () => {
    const { getByAltText } = render(
      <MemoryRouter initialEntries={['/search/1']}>
        <SearchComponentRow name={defaultData.name} url={defaultData.url} />,
      </MemoryRouter>,
    );
    await waitFor(() => {
      const image = getByAltText('small-poke-img');
      expect(image).toHaveAttribute('src');
    });
  });

  it('Open details page', async () => {
    render(
      <MemoryRouter initialEntries={['/search/1']}>
        <SearchComponentRow name={defaultData.name} url={defaultData.url} />,
      </MemoryRouter>,
    );
    await waitFor(() => {
      expect(screen.getByRole('link')).toHaveAttribute(
        'href',
        '/detail/Charizard',
      );
    });
  });

  it('Check for active NavLink', async () => {
    render(
      <MemoryRouter initialEntries={['/search/1']}>
        <SearchComponentRow name={defaultData.name} url={defaultData.url} />,
      </MemoryRouter>,
    );
    await waitFor(() => {
      userEvent.click(screen.getByRole('link'));
      expect(screen.getByRole('link').classList.contains('active')).toBe(true);
    });
  });
});
