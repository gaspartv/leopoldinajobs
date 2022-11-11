import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Slide, toast } from "react-toastify";
import { postUserApi } from "../services/createUser";
import { LoadContext } from "./LoadContext";

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
}

interface iUserContext {
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  registerUser: (data: iUser) => Promise<void>;
  viewPassword: string;
  setViewPassword: React.Dispatch<React.SetStateAction<string>>;
  viewCheckPassword: string;
  setViewCheckPassword: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext({} as iUserContext);

const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [viewPassword, setViewPassword] = useState("password");
  const [viewCheckPassword, setViewCheckPassword] = useState("password");

  const { setLoad } = useContext(LoadContext);

  const navigate = useNavigate();

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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
