/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// from react
import { createContext, useEffect, useState } from "react";
// from utils
import { applyShadesToCSSVariables } from "../utils/generateColorShades";

export const Context = createContext(null);

export default function ContextProvider({ children }) {
  //* Pomodoro Time
  const [pomodoro, setPomodoro] = useState(25 * 60 * 1000);
  //* Short Break Time
  const [shortBreak, setShortBreak] = useState(5 * 60 * 1000);
  //* Long Break Time
  const [longBreak, setLongBreak] = useState(15 * 60 * 1000);
  //* To check setting is open or not
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  //* Pomodoro Color Shades
  const [pomodoroColor, setPomodoroColor] = useState("#8ebabe");
  //* Short Break Color Shades
  const [shortBreakColor, setShortBreakColor] = useState("#42766b");
  //* Long Break Color Shades
  const [longBreakColor, setLongBreakColor] = useState("#ce5e09");
  //* To find out active tab/timer
  const [activeTab, setActiveTab] = useState("Pomodoro");

  //* whenever tab changes it updates the shades of the tabs
  useEffect(() => {
    applyShadesToCSSVariables(
      pomodoroColor,
      shortBreakColor,
      longBreakColor,
      activeTab
    );
  }, [activeTab]);

  return (
    <Context.Provider
      value={{
        pomodoro,
        setPomodoro,
        shortBreak,
        setShortBreak,
        longBreak,
        setLongBreak,
        isSettingOpen,
        setIsSettingOpen,
        pomodoroColor,
        setPomodoroColor,
        shortBreakColor,
        setShortBreakColor,
        longBreakColor,
        setLongBreakColor,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </Context.Provider>
  );
}
