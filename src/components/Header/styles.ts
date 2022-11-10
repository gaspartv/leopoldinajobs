import { Link } from "react-router-dom";
import styled from "styled-components";
import { entring } from "../../styles/animations";

export const HeaderStyled = styled.div`
  width: 100%;
  min-width: 300px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-primary);
  box-shadow: 0 1px 5px var(--color-primary);
`;

export const NavStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 16px;
  gap: 12px;
  > h1 {
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 1px;
    color: var(--color-black);
    cursor: default;
  }
  > nav {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  @media (min-width: 485px) {
    justify-content: space-between;
  }
`;

export const LinkStyled = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  text-decoration: none;
  color: var(--color-black);
  position: relative;
  display: flex;
  align-items: center;
  gap: 3px;
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
  :hover {
    color: var(--color-primary);
  }
`;
