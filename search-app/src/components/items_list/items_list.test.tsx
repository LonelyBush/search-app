import { describe, expect, it } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ItemsList from './items_list';

describe('ItemsList', () => {
  it('Should render correctly 20 search-row items', async () => {
    const mockSearchVal = '';
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/search/1']}>
        <ItemsList searchValue={mockSearchVal} />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(getByTestId('items-list').children.length).toEqual(20);
    });
  });
  it('Should render loading spinner correctly', async () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/search/1']}>
        <ItemsList searchValue="" />
      </MemoryRouter>,
    );

    expect(getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('Should render loading spinner correctly', async () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/search/1']}>
        <ItemsList searchValue="" />
      </MemoryRouter>,
    );

    expect(getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('Renders empty search result if no results', async () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/search/1']}>
        <ItemsList searchValue="123" />
      </MemoryRouter>,
    );
    await waitFor(() => {
      expect(
        getByText('Ohh no... there is no such pokemon according your query.'),
      ).toBeInTheDocument();
    });
  });
});
