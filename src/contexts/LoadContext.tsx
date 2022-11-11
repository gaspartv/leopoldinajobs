import { createContext, useState } from "react";

import { Loading } from "../components/Loading";

interface iLoadContextProps {
  children: React.ReactNode;
}

interface iLoadContext {
  load: boolean;
  setLoad: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoadContext = createContext({} as iLoadContext);

const LoadProvider = ({ children }: iLoadContextProps) => {
  const [load, setLoad] = useState(false);

  return (
    <LoadContext.Provider value={{ load, setLoad }}>
      {load && <Loading />}
      {children}
    </LoadContext.Provider>
  );
};

export default LoadProvider;
