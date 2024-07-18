import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchItem from './search_item';

describe('SearchItem', () => {
  it('Should render loading spinner correctly', async () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/search/1']}>
        <SearchItem />
      </MemoryRouter>,
    );

    expect(getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('Press on close btn should work ', async () => {
    const { getByRole } = render(
      <MemoryRouter initialEntries={['/details/charizard']}>
        <Routes>
          <Route path="/details/:pokeName" element={<SearchItem />} />
        </Routes>
      </MemoryRouter>,
    );
    await waitFor(() => {
      userEvent.click(getByRole('button'));
      expect(getByRole('button')).toBeInTheDocument();
    });
  });
});
