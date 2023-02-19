import React, { useRef } from "react";

export default function RefFun() {
  let inputRef = useRef();
  const handleBtn = () => {
    // inputRef.current.value = 1000;
    // inputRef.current.focus();
    inputRef.current.style.color = "red";
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleBtn}>Handle Ref</button>
    </>
  );
}
