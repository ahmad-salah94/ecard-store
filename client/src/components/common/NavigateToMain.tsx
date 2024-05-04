import React from "react";
import { Navigate } from "react-router-dom";

interface NavigateToMainProps {
  children: React.ReactNode;
}

const NavigateToMain: React.FC<NavigateToMainProps> = ({ children }) => {
  const authenticated = localStorage.getItem("token");

  if (authenticated) {
    return <Navigate to={"/"} />;
  }

  return <>{children}</>;
};

export default NavigateToMain;
