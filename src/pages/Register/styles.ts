import styled from "styled-components";
import { entring } from "../../styles/animations";

export const RegisterStyled = styled.div`
  padding-top: 110px;
  background-color: var(--color-primary);
  height: 100vh;
  @media (min-width: 485px) {
    padding-top: 70px;
  }
`;

export const FormStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  > form {
    width: 100%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: var(--color-white);
    padding: 16px;
    border-radius: 4px;
    > h2 {
      font-size: 22px;
      font-weight: 700;
      letter-spacing: 1px;
      color: var(--color-black);
      margin-bottom: 20px;
    }
    > div {
      display: flex;
      flex-direction: column;
      gap: 4px;
      > label {
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 1px;
        color: var(--color-black);
      }
      > input {
        padding: 12px;
        border: 1px solid var(--color-black);
        border-radius: 4px;
      }
      > p {
        width: 230px;
        position: relative;
        margin-top: 30px;
        letter-spacing: 1px;
        color: var(--color-black);
        cursor: pointer;
        > span {
          position: absolute;
          background-color: var(--color-primary);
          height: 1px;
          bottom: -2px;
          left: 0;
          border-radius: 50%;
        }
        :hover span {
          animation: ${entring} 0.3s ease forwards;
        }
      }
      > button {
        margin-top: 10px;
        padding: 12px;
        border: none;
        border-radius: 4px;
        background-color: var(--color-primary);
        color: var(--color-white);
        letter-spacing: 2px;
        font-size: 20px;
        cursor: pointer;
        :hover {
          filter: brightness(1.1);
        }
      }
    }
  }
`;
