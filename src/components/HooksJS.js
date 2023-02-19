import React, { useEffect, useState } from "react";

export default function HooksJS() {
  const [count, setCount] = useState(1);
  const [Demo, setDemo] = useState(100);
  useEffect(() => {
    console.log("useEffect Hooks");
  }, [Demo]); // This useEffect call only for Demo state
  return (
    <>
      <h2>count : {count}</h2>
      <h2>Demo : {Demo}</h2>
      <button onClick={() => setCount(count + 1)}>Update</button>
      <button onClick={() => setDemo(Demo + 10)}>Demo</button>
    </>
  );
}
