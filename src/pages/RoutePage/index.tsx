/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export const RoutePage = () => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    user ? navigate("/home") : navigate("/login");
  }, []);

  return <></>;
};
