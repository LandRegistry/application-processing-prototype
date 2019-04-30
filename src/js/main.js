import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import ErrorBoundary from './app/ErrorBoundary'

ReactDOM.render(<ErrorBoundary><App /></ErrorBoundary>, document.getElementById('root'));
