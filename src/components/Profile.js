import React from "react";
import { userContext } from "../context";
import { useContext } from "react";
const Profile = () => {
  const { user, handleLogout } = useContext(userContext);
  console.log("profile", user.name);
  return (
    <div>
      {<p>Username : {user.name}</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
