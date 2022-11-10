import { EditIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Container } from "../Container";

import { HeaderStyled, LinkStyled, NavStyled } from "./styles";

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <NavStyled>
          <h1>Leopoldina Jobs</h1>
          <nav>
            <LinkStyled to="/register">
              <EditIcon /> Cadastrar <span></span>
            </LinkStyled>
            <LinkStyled to="/login">
              <ExternalLinkIcon /> Entrar <span></span>
            </LinkStyled>
          </nav>
        </NavStyled>
      </Container>
    </HeaderStyled>
  );
};
