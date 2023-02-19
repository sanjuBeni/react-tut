import React, { useState } from "react";

export default function Test(props) {
  //   let data = "Test Data";
  const [data, setData] = useState(0);
  const btnHandle = () => {
    // data = "Change Data";
    setData(data + 1);
  };
  // console.log(props.name);
  return (
    <div>
      <h1>Name : {props.name}</h1>
      <h1>Email : {props.email}</h1>
      <h2>{data}</h2>
      <button onClick={btnHandle}>Click Me!</button>
    </div>
  );
}
