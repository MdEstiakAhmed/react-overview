import React, { useState } from 'react';

const RenderPropExample = ({ renderProp }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {renderProp(count, incrementCount)}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h2>Render Prop Example</h2>
      {/* Using RenderPropExample with a render prop */}
      <RenderPropExample
        renderProp={
          (count, incrementCount) => {
            return (
              <Counter count={count} incrementCount={incrementCount} />
            )
          }
        }
      />

      {/* Using RenderPropExample with a different render prop */}
      <RenderPropExample
        renderProp={(count, incrementCount) => (<Counter count={count} incrementCount={incrementCount} />)}
      />
    </div>
  );
};


const Counter = ({ count, incrementCount }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

export default App;
