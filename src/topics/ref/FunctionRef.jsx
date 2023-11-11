import React, { useRef, useEffect } from 'react';

function FunctionalRef() {
    const myInput = useRef();

    useEffect(() => {
        myInput.current.focus(); // Using the useRef hook to focus on the input element
    }, []);

    return <input ref={myInput} />;
}

export default FunctionalRef;