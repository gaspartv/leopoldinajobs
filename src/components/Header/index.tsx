import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonGroup, Button } from "@mui/material";

import { UserContext } from "../../contexts/UserContext";
import { Container } from "../Container";

import { HeaderStyled, NavStyled } from "./styles";

export const Header = () => {
  const { user } = useContext(UserContext);

  const navegate = useNavigate();

  return (
    <HeaderStyled>
      <Container>
        <NavStyled>
          <h1>
            search<span>Jobs</span>
          </h1>
          <nav>
            <ButtonGroup variant="text" aria-label="text button group">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  navegate("/");
                }}
              >
                Início
              </Button>
              {user ? (
                <>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      navegate("/account");
                    }}
                  >
                    Minha conta
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      navegate("/logout");
                    }}
                  >
                    Sair
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      navegate("/register");
                    }}
                  >
                    Cadastrar
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      navegate("/login");
                    }}
                  >
                    Entrar
                  </Button>
                </>
              )}
            </ButtonGroup>
          </nav>
        </NavStyled>
      </Container>
    </HeaderStyled>
  );
};
