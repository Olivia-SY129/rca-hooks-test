// useState

import React from "react";

// useState => count
export default function Example2() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={click}>Click! :D</button>
    </div>
  );

  function click() {
    setCount(count + 1);
  }
}
