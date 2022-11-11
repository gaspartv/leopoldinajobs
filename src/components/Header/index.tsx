import { ButtonGroup, Button } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { Container } from "../Container";

import { HeaderStyled, NavStyled } from "./styles";

export const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <HeaderStyled>
      <Container>
        <NavStyled>
          <h1>
            Leopoldina<span>Jobs</span>
          </h1>
          <nav>
            <ButtonGroup variant="text" aria-label="text button group">
              <Button href="/">Início</Button>
              {user ? (
                <>
                  <Button href="/account">Minha conta</Button>
                  <Button href="/logout">Sair</Button>
                </>
              ) : (
                <>
                  <Button href="/register">Cadastrar</Button>
                  <Button href="/login">Entrar</Button>
                </>
              )}
            </ButtonGroup>
          </nav>
        </NavStyled>
      </Container>
    </HeaderStyled>
  );
};
