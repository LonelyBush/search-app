import Router from './router/router';
import './App.css';
import ErrorBoundary from './components/error_boundry/error_boundary';

function App() {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  );
}

export default App;
