import { JSX, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const SessionLayout = (): JSX.Element => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
