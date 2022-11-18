import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

import { iUser } from "../../contexts/UserContext";
import { recoverSchema } from "../../validations/recoverSchema";

import { FormStyled } from "../../components/FormRegister/styles";
import { Header } from "../../components/Header";

import { RecoverStyled } from "./styles";

export const Recover = () => {
  const navegate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUser>({
    resolver: yupResolver(recoverSchema),
  });

  return (
    <>
      <Header />
      <RecoverStyled>
        <FormStyled>
          <form>
            <h2>Encontre sua conta</h2>
            <h4>Insira seu email para procurar a sua conta.</h4>
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
            </div>
            <span>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  navegate("/login");
                }}
                variant="outlined"
              >
                Cancelar
              </Button>
              <Button
                disabled
                type="submit"
                variant="contained"
                disableElevation
              >
                Pesquisar
              </Button>
            </span>
          </form>
        </FormStyled>
      </RecoverStyled>
    </>
  );
};
