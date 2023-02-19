import React, { useState } from "react";

export default function Profile() {
  const [login, setLogin] = useState(1);
  const loginUser = () => {
    login === 1 ? setLogin(2) : login === 2 ? setLogin(3) : setLogin(1);
  };
  return (
    <>
      {login === 1 ? (
        <h2>User 1 login</h2>
      ) : login === 2 ? (
        <h2>User 2 login</h2>
      ) : (
        <h2>User 3 login</h2>
      )}
      <button type="button" onClick={loginUser}>
        Login
      </button>
    </>
  );
}
