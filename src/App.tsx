import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Login } from "./components/pages/Login";
import { SessionLayout } from "./components/layout/SessionLayout";
import { SignupLayout } from "./components/layout/SignupLayout";
import { Dashboard } from "./components/pages/Dashboard";
import { NoPageFound } from "./components/pages/NoPageFound";
import { Signup } from "./components/pages/Signup";
import { getUserList } from "./utils/getUserList";
import { setUserList } from "./utils/setUserList";
import { userListMock } from "./constants/userListMock";

function App() {
  useEffect(() => {
    const users = getUserList();

    if (!users?.length) {
      setUserList(userListMock);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route element={<SignupLayout />}>
            <Route index path="login" element={<Login />} />
            <Route path="criar-conta" element={<Signup />} />
          </Route>

          <Route path="session" element={<SessionLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>

          <Route path="*" element={<NoPageFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
