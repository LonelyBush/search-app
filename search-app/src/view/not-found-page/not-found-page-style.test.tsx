import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import NotFoundPage from './not-found-page';
import SearchPage from '../search-page/search-page';

describe('NotFoundPage', () => {
  it('Should render correctly', () => {
    const router = createMemoryRouter(
      createRoutesFromElements(
        <Route errorElement={<NotFoundPage />} element={<SearchPage />} />,
      ),
      {
        initialEntries: ['/events/123'],
      },
    );

    const { getByText } = render(<RouterProvider router={router} />);
    expect(getByText('Oh no... Sorry, but this page is not existing'));
  });
});
