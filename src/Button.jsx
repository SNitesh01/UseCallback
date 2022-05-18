import React from 'react';

function Button({ onIncrement, children }) {
  console.log('Rendering', children);
  return <button onClick={onIncrement}>{children}</button>;
}

export default React.memo(Button);
