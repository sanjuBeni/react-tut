import React, { useState } from "react";

export const InputField = () => {
  const [data, setData] = useState("");
  const [print, setPrint] = useState(false);
  const [togg, setTogg] = useState(true);
  const inputValue = (event) => {
    // console.log(event.target.value);
    setData(event.target.value);
  };

  const toggleHandle = () => {
    togg ? setTogg(false) : setTogg(true);
  };

  return (
    <div>
      {togg ? <h2>Toggle...</h2> : null}
      {print && <h3>{data}</h3>}
      <input type="text" onChange={inputValue} />
      <button onClick={() => setPrint(true)}>Print</button>
      <br></br>
      {/* <button onClick={toggleHandle}>Toggle</button> */}
      <button onClick={() => setTogg(!togg)}>Toggle</button>
    </div>
  );
};
