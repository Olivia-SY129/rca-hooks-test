// useState, state as if in class

import React from "react";

// useState => { count: 0 };
export default function Example3() {
  const [state, setState] = React.useState({ count: 0 });

  return (
    <div>
      <p>you clicked {state.count} times</p>
      <button onClick={click}>Click! :D</button>
    </div>
  );

  function click() {
    // setState({ count: state.count + 1 });
    setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  }
}
