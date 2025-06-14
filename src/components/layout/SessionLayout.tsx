import { JSX } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getUserSession } from "../../utils/getUserSession";
import { AppContainer } from "./AppContainer";

export const SessionLayout = (): JSX.Element => {
  const userSession = getUserSession();

  if (!userSession) {
    return <Navigate to="/login" replace />;
  }

  return (
    <AppContainer>
      <Outlet />
    </AppContainer>
  );
};
