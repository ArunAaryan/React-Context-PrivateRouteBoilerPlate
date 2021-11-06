import React, { useState } from "react";
import RouteHelper from "./RouteHelper";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { userContext } from "./context";
function App() {
  const [user, setUser] = useState(null);
  const handleLogout = () => {
    setUser(null);
  };
  const handleLogin = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users/1").then((res) => {
      res.json().then((data) => {
        setUser(data);
      });
    });
  };
  return (
    <div className="App">
      <userContext.Provider
        value={{
          user: user,
          handleLogin: handleLogin,
          handleLogout: handleLogout,
        }}
      >
        <RouteHelper />
      </userContext.Provider>
    </div>
  );
}

export default App;
