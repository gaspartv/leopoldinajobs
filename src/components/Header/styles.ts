import styled from "styled-components";

export const HeaderStyled = styled.div`
  min-width: 300px;
  background-color: var(--color-white);
`;

export const NavStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 16px;
  gap: 12px;
  > h1 {
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 2px;
    color: var(--color-primary);
    cursor: default;
    > span {
      color: var(--color-black);
      text-transform: uppercase;
    }
  }
  @media (min-width: 570px) {
    justify-content: space-between;
  }
`;
