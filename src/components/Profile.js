import React from "react";
import { useSelector } from "react-redux";


export default function Profile() {
  const user = useSelector((state) => state.users);

  return (
    <div className="profile-page">
      <h1>{user.login}</h1>
      <p></p>
    </div>
  );
}
