/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// global context
export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  //* state variables
  const [time, setTime] = useState([
    {
      title: "Pomodoro",
      value: "pomodoro",
      time: 25 * 60 * 1000,
      active: true,
      id: 0,
    },
    {
      title: "Short Break",
      value: "shortBreak",
      time: 5 * 60 * 1000,
      active: false,
      id: 1,
    },
    {
      title: "Long Break",
      value: "longBreak",
      time: 15 * 60 * 1000,
      active: false,
      id: 2,
    },
  ]);

  //* return
  return (
    <Context.Provider value={{ time, setTime }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
