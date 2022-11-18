import { Route, Routes } from "react-router-dom";

import { ProtectRoutes } from "../components/ProtectRoutes/ProtectRoutes";

import { Error } from "../pages/Error";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Recover } from "../pages/Recover";
import { Register } from "../pages/Register";
import { RoutePage } from "../pages/RoutePage";
import { Cookies } from "../pages/Rules/Cookies";
import { Privacy } from "../pages/Rules/Privacy";
import { Terms } from "../pages/Rules/Terms";
import { RegisterContinue1 } from "../pages/RegisterContinue1";
import { RegisterContinue2 } from "../pages/RegisterContinue2";

const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<RoutePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recover" element={<Recover />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/registration1" element={<RegisterContinue1 />} />
      <Route path="/registration2" element={<RegisterContinue2 />} />

      <Route element={<ProtectRoutes />}>
        <Route path="/home" element={<Home />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RouterMain;
