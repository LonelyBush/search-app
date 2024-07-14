import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import './App.css';
import ErrorBoundary from './components/error_boundry/error_boundary';

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
