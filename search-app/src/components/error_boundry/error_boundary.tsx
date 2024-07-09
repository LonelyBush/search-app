import { Component, ErrorInfo, ReactNode } from 'react';
import './error_boundary-style.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error or send it to an error reporting service
    console.error(error, errorInfo);
    // Update state to show the fallback UI
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error-container">
          <h2>Something went wrong...</h2>
          <p>Please, restart a page... Maybe it will go away....</p>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
