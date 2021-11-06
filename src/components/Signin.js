import React from "react";
import { useContext } from "react";
import { userContext } from "../context";
const Signin = () => {
  const { handleLogin } = useContext(userContext);
  return (
    <div>
      <p>Signin</p>
      <button onClick={handleLogin}>Signin</button>
    </div>
  );
};

export default Signin;
