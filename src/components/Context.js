import { createContext, useState } from "react";

export const Pc = createContext();

const Context = ({ children }) => {
  const [pc, setpc] = useState([]);
  return <Pc.Provider value={{ pc, setpc }}>{children}</Pc.Provider>;
};

export default Context;
