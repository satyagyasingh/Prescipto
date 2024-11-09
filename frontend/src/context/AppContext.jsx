import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = () => {
  const value = {
    doctors
  }
  return(
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
};
