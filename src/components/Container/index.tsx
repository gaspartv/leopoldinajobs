import { ContainerStyled } from "./styles";

interface iContainerProps {
  children: React.ReactNode;
}
export const Container = ({ children }: iContainerProps) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};
