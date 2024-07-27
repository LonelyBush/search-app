import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { router } from './router';
import ProviderWrapper from '../utils/provider_wrapper';

describe('Router', () => {
  it('renders the SearchPage component for the /search/:pageNum route', () => {
    const testRouter = createMemoryRouter(router.routes, {
      initialEntries: ['/'],
    });
    const { getByText } = render(<RouterProvider router={testRouter} />, {
      wrapper: ProviderWrapper,
    });

    expect(getByText('Poke Search')).toBeInTheDocument();
  });
});
