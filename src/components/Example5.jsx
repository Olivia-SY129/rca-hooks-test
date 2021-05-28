// useEffect

import React from "react";

// useState => count
export default function Example5() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("ComponentDidMount");

    return () => {
      // cleanup
      // 배열 안에 아무것도 없으므로,
      // componentWillUnMount
    };
  }, []);

  React.useEffect(() => {
    console.log("ComponentDidMount & ComponentDidUpdate by count", count);

    return () => {
      // cleanup
      // count에 대하여,
      // render 전에 실행**
      console.log("cleanup by count", count);
    };
  }, [count]);

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
