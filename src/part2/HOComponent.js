import React, { useState } from "react";

export default function HOComponent() {
  return (
    <>
      <h2>High Order Component</h2>
      <RedComp cmp={<Counter />} />
      <GreenComp cmp={<Counter />} />
    </>
  );
}

function RedComp(props) {
  return <div style={{ color: "red" }}>{props.cmp}</div>;
}

function GreenComp(props) {
  return <div style={{ color: "green" }}>{props.cmp}</div>;
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
}
