import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import SearchPage from '../view/search-page/search-page';
import NotFoundPage from '../view/not-found-page/not-found-page';
import SearchItem from '../components/search_item/search_item';
import { getPokes } from '../api/getAllPokes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<NotFoundPage />} element={<SearchPage />}>
      <Route
        path="detail/:name"
        loader={async ({ params }) => {
          const response = await getPokes(
            `https://pokeapi.co/api/v2/pokemon/${params.name}`,
          );
          console.log(response);
          return response;
        }}
        element={<SearchItem />}
      />
    </Route>,
  ),
);

export default router;
