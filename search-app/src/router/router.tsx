import { Routes, Route, Navigate } from 'react-router-dom';
import SearchPage from '../view/search-page/search-page';
import NotFoundPage from '../view/not-found-page/not-found-page';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/main" replace />} />
      <Route path="/main" element={<SearchPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
