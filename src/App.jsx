import React, { Suspense, lazy } from 'react';
import LoadingComponent from './LoadingComponent';

const LazyComponent = lazy(() => import('./LazyComponent'));

// Wrapping the component with Suspense
const App = () => {
  return (
    // <Suspense fallback={<LoadingComponent />}>
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};

export default App;
