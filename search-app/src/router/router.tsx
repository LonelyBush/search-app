import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import SearchPage from '../view/search-page/search-page';
import NotFoundPage from '../view/not-found-page/not-found-page';
import SearchItem from '../components/search_item/search_item';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/search/1" replace />} />
      <Route
        path="/search/:pageNum"
        errorElement={<NotFoundPage />}
        element={<SearchPage />}
      >
        <Route
          path="detail/:pokeName"
          element={<SearchItem />}
          errorElement={<NotFoundPage />}
        />
      </Route>
    </>,
  ),
);

export default router;
