import { createContext, useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";

interface iAnimationContextProps {
  children: React.ReactNode;
}

interface iAnimationContext {
  parent: React.MutableRefObject<null>;
}

export const AnimationContext = createContext({} as iAnimationContext);

const AnimationProvider = ({ children }: iAnimationContextProps) => {
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <AnimationContext.Provider value={{ parent }}>
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationProvider;
