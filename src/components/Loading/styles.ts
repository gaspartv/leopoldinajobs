import styled from "styled-components";

import { rotate } from "../../styles/animations";

export const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00000090;
  position: fixed;
  z-index: 150;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 4.375rem;
    animation: ${rotate} 4s linear infinite;
  }
`;
