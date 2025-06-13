import { JSX, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserSession } from "../../utils/getUserSession";

export const Home = (): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    const userSession = getUserSession();

    if (!userSession) {
      navigate("/login");
    } else {
      navigate("/session/dashboard");
    }
  }, []);

  return <div>Home page</div>;
};
