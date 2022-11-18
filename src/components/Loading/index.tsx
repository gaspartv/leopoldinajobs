import spinner from "../../assets/spinner.svg";
import { Div } from "./styles";

export const Loading = () => {
  return (
    <Div>
      <img src={spinner} alt="Loading" />
    </Div>
  );
};
