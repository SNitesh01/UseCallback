import React, { memo } from 'react';

function Count({ text, count }) {
  console.log('Rendering Count', text);
  return (
    <div>
      <h3>
        {text} - {count}
      </h3>
    </div>
  );
}
export default memo(Count);
