import React, { memo, useState } from 'react';

// Regular functional component
const MyComponent = ({ name }) => {
    console.log('Rendering MyComponent');
    return <p>Hello, {name}!</p>;
};

// Memoized version of MyComponent using React.memo
const MemoizedMyComponent = memo(MyComponent);

// Example usage in a parent component
const ParentComponent = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [z, setZ] = useState(0);

    const updateX = () => setX(x + 1);

    const updateY = () => setY(y + 1);

    const updateZ = () => setZ(z + 1);

    return (
        <div>
            <button onClick={updateX}>x</button>
            <button onClick={updateY}>y</button>
            <button onClick={updateZ}>z</button>

            {/* Unmemoized component */}
            {/* <MyComponent name={z} /> */}

            {/* Memoized component */}
            <MemoizedMyComponent name={z} />
        </div>
    );
};

export default ParentComponent;
