import { Div } from "./styles";
import spinner from "../../assets/spinner.svg";

export const Loading = () => {
  return (
    <Div>
      <img src={spinner} alt="Loading" />
    </Div>
  );
};
