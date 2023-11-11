import React, { useState, useTransition } from 'react';

const TransitionComponent = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2']);
  const [startTransition, isPending] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      setItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
    });
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item} style={{ opacity: isPending ? 0.5 : 1 }}>
          {item}
        </div>
      ))}
      <button onClick={handleClick}>Add Item</button>
    </div>
  );
};

export default TransitionComponent;
