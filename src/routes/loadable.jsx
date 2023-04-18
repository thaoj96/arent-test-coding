import React, { lazy, Suspense } from 'react';
import ProgressBar from 'react-topbar-progress-indicator';
import ErrorBoundary from './ErrorBoundary';

const loadable = (importFunc, fallback = <ProgressBar />) => {
  const LazyComponent = lazy(importFunc);
  return (props) => {
    return (
      <ErrorBoundary>
        <Suspense fallback={fallback}>
          <LazyComponent {...props} />
        </Suspense>
      </ErrorBoundary>
    );
  };
};

export default loadable;
