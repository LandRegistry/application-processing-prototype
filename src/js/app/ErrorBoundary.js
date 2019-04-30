import React from 'react';
import PageTemplate from './PageTemplate'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <PageTemplate>
        <h1 className="govuk-heading-l">Something went wrong.</h1>
      </PageTemplate>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary
