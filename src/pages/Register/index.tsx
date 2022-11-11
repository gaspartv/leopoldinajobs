import { useContext } from "react";
import { TextField, Button, Link } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Header } from "../../components/Header";
import { FormStyled, RegisterStyled } from "./styles";
import { iUser, UserContext } from "../../contexts/UserContext";
import { registerSchema } from "../../validations/registerSchema";

export const Register = () => {
  const { registerUser } = useContext(UserContext);

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
                      <ErrorIcon color="primary" />
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
                      <ErrorIcon color="primary" />
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
                      <ErrorIcon color="primary" />
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
                  type="text"
                  {...register("password")}
                />
                <span>
                  {errors.password && (
                    <>
                      <ErrorIcon color="primary" />
                      <p>{errors.password?.message}</p>
                    </>
                  )}
                </span>
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Repetir senha"
                  variant="outlined"
                  type="text"
                  {...register("checkPassword")}
                />
                <span>
                  {errors.checkPassword && (
                    <>
                      <ErrorIcon color="primary" />
                      <p>{errors.checkPassword?.message}</p>
                    </>
                  )}
                </span>
              </div>
            </div>
            <p>
              Ao clicar em Cadastra, você concorda com nossos
              <Link href="#" underline="always">
                {" Termos "}
              </Link>
              ,
              <Link href="#" underline="always">
                {" Política de Privacidade "}
              </Link>
              e
              <Link href="#" underline="always">
                {" Política de Cookies"}
              </Link>
              .
            </p>
            <span>
              <Button type="submit" variant="contained" disableElevation>
                Cadastrar
              </Button>
            </span>
          </form>
          <p>
            Já tem cadastro? Faça login! <span></span>
          </p>
        </FormStyled>
      </RegisterStyled>
    </>
  );
};
