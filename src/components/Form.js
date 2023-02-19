import React, { useState } from "react";

export default function Form(props) {
  const [name, setName] = useState("");
  const [tac, setTac] = useState(false);
  const [data, setData] = useState("");
  const [err, setErr] = useState("");
  const stopSubmit = (e) => {
    console.log(name, tac, data);
    e.preventDefault();
    if (name.length < 3) {
      setErr("Name at least 3 char");
    } else {
      setErr("");
    }
    setName("");
  };

  return (
    <>
      <form onSubmit={stopSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {err !== "" ? <span style={{ color: "red" }}>{err}</span> : null}
        <br></br>
        <br></br>
        <select onChange={(e) => setData(e.target.value)}>
          <option>Data</option>
          <option>My Data</option>
          <option>Company Data</option>
        </select>
        <br></br>
        <br></br>
        <input type="checkbox" onChange={(e) => setTac(e.target.checked)} />
        <span>Accept term & condition</span>
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
        <button type="button" onClick={props.fun}>
          Pro Fun
        </button>
      </form>
    </>
  );
}
