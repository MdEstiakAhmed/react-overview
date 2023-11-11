import React, { createContext, useContext } from 'react';

// Creating a context with a default value
const MyContext = createContext('default value');

// Component that uses the context value
const ChildComponent = () => {
    const contextValue = useContext(MyContext);

    return <p>Context Value: {contextValue}</p>;
};

// Component that provides the context value
const ParentComponent = () => {
    return (
        <MyContext.Provider value="provided value">
            <ChildComponent />
        </MyContext.Provider>
    );
};

// Example usage in the app
const App = () => {
    return (
        <div>
            <h2>Context API Example</h2>
            <ParentComponent />
        </div>
    );
};

export default App;
