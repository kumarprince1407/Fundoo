import React from "react";
// This code defines a custom React component named ProtectedRoute that handles conditional
// routing based on the presence of a user token in localStorage.
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  if (localStorage.getItem("token")) {
    return children;
  }
  return <Navigate to={"/"} />;
};

export default ProtectedRoute;
