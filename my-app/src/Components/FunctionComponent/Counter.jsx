import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCounter] = useState(0);
  useEffect (() => {
    console.log (`count: ${count}`)
  })

  return (
    <div>
      <h2>The Counter is incremented to -------{count}</h2>
      <button onClick={() => setCounter (prev => prev +1)}>Increment</button>
    </div>
  );
}
export default Counter;
