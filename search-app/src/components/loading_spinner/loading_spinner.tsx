import './loading_spinner_style.css';

function LoadingSpinner() {
  return (
    <div data-testid="loading-spinner" className="loader-component">
      <div className="pokeball-container">
        <div className="pokeball-btn" />
      </div>
    </div>
  );
}

export default LoadingSpinner;
