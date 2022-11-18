import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button, Link } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { Header } from "../../components/Header";
import { iUser, UserContext } from "../../contexts/UserContext";
import { registerSchema } from "../../validations/registerSchema";

import { RegisterStyled } from "./styles";
import {
  FormStyled,
  LinkLoginStyled,
} from "../../components/FormRegister/styles";

export const Register = () => {
  const { user } = useContext(UserContext);
  const navegate = useNavigate();
  const {
    registerUser,
    viewPassword,
    setViewPassword,
    viewCheckPassword,
    setViewCheckPassword,
  } = useContext(UserContext);

  useEffect(() => {
    user && navegate("/");
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUser>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <>
      <Header />
      <RegisterStyled>
        <FormStyled>
          <form onSubmit={handleSubmit(registerUser)}>
            <h2>Cadastre-se</h2>
            <h4>É rápido e fácil</h4>
            <span className="line"></span>
            <div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Nome"
                  variant="outlined"
                  type="text"
                  {...register("name")}
                />
                <span>
                  {errors.name && (
                    <>
                      <ErrorIcon sx={{ width: 20, heigh: 20 }} color="error" />
                      <p>{errors.name?.message}</p>
                    </>
                  )}
                </span>
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Sobrenome"
                  variant="outlined"
                  type="text"
                  {...register("surname")}
                />
                <span>
                  {errors.surname && (
                    <>
                      <ErrorIcon sx={{ width: 20, heigh: 20 }} color="error" />
                      <p>{errors.surname?.message}</p>
                    </>
                  )}
                </span>
              </div>
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
              <div>
                <TextField
                  id="outlined-basic"
                  label="Repetir senha"
                  variant="outlined"
                  type={viewCheckPassword}
                  {...register("checkPassword")}
                />
                <span>
                  {errors.checkPassword && (
                    <>
                      <ErrorIcon sx={{ width: 20, heigh: 20 }} color="error" />
                      <p>{errors.checkPassword?.message}</p>
                    </>
                  )}
                </span>
                <div className="view">
                  {viewCheckPassword === "password" ? (
                    <VisibilityIcon
                      color="primary"
                      onClick={() => setViewCheckPassword("text")}
                    />
                  ) : (
                    <VisibilityOffIcon
                      color="primary"
                      onClick={() => setViewCheckPassword("password")}
                    />
                  )}
                </div>
              </div>
            </div>
            <p>
              Ao clicar em Cadastra, você concorda com nossos
              <Link href="/terms" underline="always">
                {" Termos "}
              </Link>
              ,
              <Link href="privacy" underline="always">
                {" Política de Privacidade "}
              </Link>
              e
              <Link href="/cookies" underline="always">
                {" Política de Cookies"}
              </Link>
              .
            </p>
            <span>
              <p></p>
              <Button type="submit" variant="contained" disableElevation>
                Cadastrar
              </Button>
            </span>
          </form>
          <LinkLoginStyled to="/login">
            Já tem cadastro? Faça login! <span></span>
          </LinkLoginStyled>
        </FormStyled>
      </RegisterStyled>
    </>
  );
};
