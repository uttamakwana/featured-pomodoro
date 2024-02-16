/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// global context
export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  //* state variables
  const [time, setTime] = useState({
    pomodoro: {
      time: 25 * 60 * 1000,
      active: true,
    },
    shortBreak: {
      time: 5 * 60 * 1000,
      active: false,
    },
    longBreak: {
      time: 15 * 60 * 1000,
      active: false,
    },
  });

  //* return
  return (
    <Context.Provider value={{ time, setTime }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
