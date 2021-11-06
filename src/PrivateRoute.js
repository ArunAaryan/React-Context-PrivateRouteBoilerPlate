import React from "react";
import { Route } from "react-router-dom";
import Signin from "./components/Signin";
import { userContext } from "./context";
import { useContext } from "react";
const PrivateRoute = (props) => {
  const { user } = useContext(userContext);
  console.log("route helper", user);
  if (user) {
    return props.children;
  } else {
    return <Signin />;
  }
};

export default PrivateRoute;
