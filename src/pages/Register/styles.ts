import styled from "styled-components";
import { entring } from "../../styles/animations";

export const RegisterStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const FormStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > form {
    width: 100%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    background-color: var(--color-white);
    padding: 16px;
    border-radius: 4px;
    > h2 {
      text-align: end;
      font-size: 32px;
      font-weight: 700;
      letter-spacing: 1px;
      color: var(--color-black);
      cursor: default;
    }
    > h4 {
      color: var(--color-grey-2);
      text-align: end;
      font-size: 15px;
      font-weight: 400;
      cursor: default;
    }
    .line {
      height: 1px;
      width: 100%;
      background-color: var(--color-primary);
      opacity: 0.3;
      margin-top: 10px;
    }
    > div {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin: 16px 0;
      > div {
        display: flex;
        flex-direction: column;
        position: relative;
        .view {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          bottom: 11px;
          right: 16px;
          cursor: pointer;
          :hover {
            border-radius: 50%;
            background-color: #00000015;
          }
        }
        > span {
          position: absolute;
          top: 1px;
          left: 1px;
          cursor: pointer;
          > p {
            max-width: 300px;
            display: none;
            background-color: var(--color-white);
            border: 1px solid var(--color-red);
            border-radius: 4px;
            padding: 16px;
            position: absolute;
            bottom: 0;
            left: 0;
            float: right;
            cursor: pointer;
            z-index: 102;
          }
          :hover p {
            display: block;
            float: left;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 20px;
          }
        }
      }
    }
    > p {
      padding: 0 10px;
      font-size: 11px;
      color: var(--color-grey-2);
      margin-bottom: 16px;
    }
    > span {
      display: flex;
      justify-content: flex-end;
    }
  }
  > p {
    width: 230px;
    position: relative;
    margin-top: 10px;
    letter-spacing: 1px;
    color: var(--color-white);
    cursor: pointer;
    > span {
      position: absolute;
      background-color: var(--color-white);
      height: 1px;
      bottom: -2px;
      left: 0;
      border-radius: 50%;
    }
    :hover span {
      animation: ${entring} 0.3s ease forwards;
    }
  }
`;
