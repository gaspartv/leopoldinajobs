import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RouterMain from "./routes";
import GlobalStyle from "./styles/Global";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-center"
        autoClose={1500}
        limit={5}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> 
      <RouterMain />
    </>
  );
};

export default App;
