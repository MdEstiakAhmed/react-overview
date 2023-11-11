import React, { Suspense } from 'react';

// Component that fetches data asynchronously
const DataFetchingComponent = React.lazy(() => import('./DataFetchingComponent.jsx'));

// App component
const App = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <DataFetchingComponent />
            </Suspense>
        </div>
    );
};

export default App;
