import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { describe, expect, it, vi } from 'vitest';
import SearchBar from './search_bar';
import { SearchBarProps } from '../../interfaces/props_interfaces';

describe('SearchBar', () => {
  it('Should submit correctly', async () => {
    const user = userEvent.setup();
    const props: SearchBarProps = {
      handleSubmit: vi.fn(),
      searchValue: '',
    };
    render(
      <SearchBar
        handleSubmit={props.handleSubmit}
        searchValue={props.searchValue}
      />,
    );
    await user.type(screen.getByRole('textbox'), 'Pikachu');
    await user.click(screen.getByRole('button'));
    expect(screen.getByRole('button').innerHTML).toBe('Search');
  });
  it('Should set focus correctly', async () => {
    const user = userEvent.setup();
    const props: SearchBarProps = {
      handleSubmit: vi.fn(),
      searchValue: '',
    };
    render(
      <SearchBar
        handleSubmit={props.handleSubmit}
        searchValue={props.searchValue}
      />,
    );
    await user.click(screen.getByRole('textbox'));
    expect(screen.getByRole('textbox').getAttribute('data-focused')).toBe(
      'true',
    );
  });
});
