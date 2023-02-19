import React, { useMemo, useState } from "react";

export default function UseMemoHook() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multiCount = () => {
    console.log("My Value also run");
    return count * 5;
  };
  const multiCountMemo = useMemo(() => multiCount(), [count]);

  return (
    <>
      <h2>Use Memo Hook</h2>
      <h2>Count : {count}</h2>
      <h2>Count : {item}</h2>
      <h2>Value : {multiCountMemo}</h2>
      <button onClick={() => setCount(count + 1)}>Count Update</button>
      <button onClick={() => setItem(item * 3)}>Item Change</button>
    </>
  );
}
