import { useContext, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  FormStyled,
  LinkLoginStyled,
} from "../../components/FormRegister/styles";
import { Header } from "../../components/Header";
import { iUser, UserContext } from "../../contexts/UserContext";
import { loginSchema } from "../../validations/loginSchema";
import { LoginStyled } from "./styles";
import ErrorIcon from "@mui/icons-material/Error";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { user, viewPassword, setViewPassword, loginUser } =
    useContext(UserContext);

  const navegate = useNavigate();

  useEffect(() => {
    user && navegate("/");
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUser>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <>
      <Header />
      <LoginStyled>
        <FormStyled>
          <form onSubmit={handleSubmit(loginUser)}>
            <h2>Entrar</h2>
            <h4>Bem vindo!</h4>
            <span className="line"></span>
            <div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                  type="text"
                  {...register("email")}
                />
                <span>
                  {errors.email && (
                    <>
                      <ErrorIcon sx={{ width: 20, heigh: 20 }} color="error" />
                      <p>{errors.email?.message}</p>
                    </>
                  )}
                </span>
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Senha"
                  variant="outlined"
                  type={viewPassword}
                  {...register("password")}
                />
                <span>
                  {errors.password && (
                    <>
                      <ErrorIcon sx={{ width: 20, heigh: 20 }} color="error" />
                      <p>{errors.password?.message}</p>
                    </>
                  )}
                </span>
                <div className="view">
                  {viewPassword === "password" ? (
                    <VisibilityIcon
                      color="primary"
                      onClick={() => setViewPassword("text")}
                    />
                  ) : (
                    <VisibilityOffIcon
                      color="primary"
                      onClick={() => setViewPassword("password")}
                    />
                  )}
                </div>
              </div>
            </div>
            <span>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  navegate("/register");
                }}
                variant="outlined"
              >
                Cadastrar-se
              </Button>
              <Button type="submit" variant="contained" disableElevation>
                Entrar
              </Button>
            </span>
          </form>
          <LinkLoginStyled to="/recover">
            Esqueceu a senha ? <span></span>
          </LinkLoginStyled>
        </FormStyled>
      </LoginStyled>
    </>
  );
};
