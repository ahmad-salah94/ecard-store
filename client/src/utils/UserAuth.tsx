import React from "react";
import { Navigate } from "react-router-dom";

interface UserAuthProps {
  children: React.ReactNode;
}

const UserAuth: React.FC<UserAuthProps> = ({ children }) => {
  const authenticated = localStorage.getItem("token") ? true : false;

  if (!authenticated) {
    return <Navigate to={"/login"} />;
  }

  return <>{children}</>;
};

export default UserAuth;
