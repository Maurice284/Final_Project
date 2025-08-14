import React from "react";
import { Link } from "react-router-dom";

const ProfilePage = ({ user }) => {
  if (!user) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Profile</h1>
        <p>You must be logged in to view your profile.</p>
        <Link to="/login">Go to Login</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Profile</h1>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Member Since:</strong> {user.createdAt || "N/A"}
      </p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ProfilePage;
