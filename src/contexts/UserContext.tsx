import { createContext, useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Slide, toast } from "react-toastify";

import { api } from "../services/api";
import { LoadContext } from "./LoadContext";

import { postUserApi } from "../services/createUser";
import { editUserApi } from "../services/editUser";
import { loginUserApi } from "../services/loginUser";

interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iUser {
  email: string;
  id: number;
  name: string;
  surname: string;
  password: string;
  checkPassword: string;
  gender?: string;
  username?: string;
  day?: string;
  month?: string;
  age?: string;
}

interface iUserContext {
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  registerUser: (data: iUser) => Promise<void>;
  viewPassword: string;
  setViewPassword: React.Dispatch<React.SetStateAction<string>>;
  viewCheckPassword: string;
  setViewCheckPassword: React.Dispatch<React.SetStateAction<string>>;
  loginUser: (log: iUser) => Promise<void>;
  editUser: (data: any) => Promise<void>;
}

export const UserContext = createContext({} as iUserContext);

const UserProvider = ({ children }: iUserProviderProps) => {
  const { setLoad } = useContext(LoadContext);

  const [user, setUser] = useState<iUser | null>(null);
  const [viewPassword, setViewPassword] = useState("password");
  const [viewCheckPassword, setViewCheckPassword] = useState("password");

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const autoLoginUser = async () => {
      if (localStorage.getItem("id")) {
        setLoad(true);
        try {
          api.defaults.headers.authorization = `Bearer ${localStorage.getItem(
            "token"
          )}`;
          const { data } = await api.get(
            `/users/${localStorage.getItem("id")}`
          );
          setUser(data);
        } catch {
          logoutUser();
        } finally {
          setLoad(false);
        }
      }
    };
    autoLoginUser();
  }, []);

  const registerUser = async (reg: iUser) => {
    setLoad(true);
    try {
      await postUserApi(reg);
      toast.info("Cadastro realizado!", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
        theme: "light",
      });
      navigate("/login");
    } catch {
      toast.error("E-mail já cadastrado", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
        theme: "light",
      });
    } finally {
      setLoad(false);
    }
  };

  const loginUser = async (log: iUser) => {
    setLoad(true);
    try {
      const response = await loginUserApi(log);
      localStorage.setItem("token", response.accessToken);
      localStorage.setItem("id", response.user.id);
      api.defaults.headers.authorization = `Bearer ${response.accessToken}`;
      const toNavigate = location.state?.from?.pathname || "/home";
      setUser(response.user);
      toast.info("Login realizado!", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
        theme: "light",
      });
      response.user.completed
        ? navigate(toNavigate, { replace: true })
        : navigate("/registration1");
    } catch {
      toast.error("E-mail ou senha incorreto!", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
        theme: "light",
      });
    } finally {
      setLoad(false);
    }
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.clear();
  };

  const editUser = async (data: any) => {
    setLoad(true);
    try {
      await editUserApi(data, user?.id);
      navigate("/registration2");
    } catch {
    } finally {
      setLoad(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        registerUser,
        viewPassword,
        setViewPassword,
        viewCheckPassword,
        setViewCheckPassword,
        loginUser,
        editUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
