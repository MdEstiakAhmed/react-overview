import React, { forwardRef, useRef } from 'react';

// work
const ChildComponent = forwardRef(({a, b, c}, ref) => {
    return <input ref={ref} />;
});

// not work
const ChildComponent1 = ({ref}) => {
    return <input ref={ref} />;
};

const ParentComponent = () => {
    const childRef = useRef(null);

    const handleButtonClick = () => {
        childRef.current.focus();
    };

    return (
        <div>
            <ChildComponent ref={childRef} />
            <button onClick={handleButtonClick}>Focus on Child Component</button>
        </div>
    );
};

export default ParentComponent;
