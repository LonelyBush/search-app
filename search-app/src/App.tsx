import './App.css';
import ErrorBoundary from './components/error_boundry/error_boundary';
import SearchPage from './view/search-page';

function App() {
  return (
    <ErrorBoundary>
      <SearchPage />
    </ErrorBoundary>
  );
}

export default App;
