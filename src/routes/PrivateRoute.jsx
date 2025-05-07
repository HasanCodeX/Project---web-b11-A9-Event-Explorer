import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/Provider/AuthProvider"; // Assuming useAuth provides current user status

const PrivateRoute = ({ children }) => {
  const { user } = useAuth(); // Assume `user` is available if logged in

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
