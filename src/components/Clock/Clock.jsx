/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Tabs from "./Tabs/Tabs";
import Timer from "./Timer/Timer";
// css
import "./clock.css";
import { changeTabTimerAndTheme } from "./utils";

const Clock = ({
  pomodoro,
  shortBreak,
  longBreak,
  activeTab,
  setActiveTab,
}) => {
  const [clockTime, setClockTime] = useState(pomodoro);
  const [isStart, setIsStart] = useState(false);
  const [previousInterval, setPreviousInterval] = useState(null);
  console.count("component re-rendering...");
  // functions:
  // handle change tab
  function handleChangeTab(tab) {
    setIsStart(false);
    if (tab !== activeTab) {
      if (isStart || (activeTab === "Pomodoro" && clockTime < pomodoro)) {
        let sureToChange;
        if (tab === "Long Break") {
          sureToChange = confirm("Want to take a long break?");
        } else if (tab === "Short Break") {
          sureToChange = confirm("Want to take a short break?");
        } else {
          sureToChange = confirm("Want to start working!?");
        }
        if (sureToChange) {
          if (tab === "Short Break") {
            changeTabTimerAndTheme(tab, shortBreak, setClockTime);
          } else if (tab === "Long Break") {
            changeTabTimerAndTheme(tab, longBreak, setClockTime);
          } else {
            changeTabTimerAndTheme(tab, pomodoro, setClockTime);
          }
          setActiveTab(tab);
        } else {
          setIsStart(true);
          return;
        }
      } else {
        setActiveTab(tab);
        if (tab === "Short Break") {
          changeTabTimerAndTheme(tab, shortBreak, setClockTime);
        } else if (tab === "Long Break") {
          changeTabTimerAndTheme(tab, longBreak, setClockTime);
        } else {
          changeTabTimerAndTheme(tab, pomodoro, setClockTime);
        }
      }
    } else {
      setIsStart(true);
    }
  }
  // handle start timer
  function handleStartTimer() {
    setIsStart(true);
  }
  // handle stop timer
  function handleStopTimer() {
    setIsStart(false);
  }

  useEffect(() => {
    let interval;
    if (isStart) {
      interval = setInterval(() => {
        setClockTime((prev) => {
          if (prev >= 1000) {
            return prev - 1000;
          }
        });
      }, 1000);
      setPreviousInterval(interval);
    } else {
      clearInterval(previousInterval);
    }
  }, [isStart]);

  useEffect(() => {
    setActiveTab("Pomodoro");
    setClockTime(pomodoro);
  }, [pomodoro, shortBreak, longBreak]);
  return (
    <div className="readable-container flex-col ai-center gap-1 bg-primary-500 p-1 br-5">
      <Tabs activeTab={activeTab} handleChangeTab={handleChangeTab} />
      <Timer clockTime={clockTime} />
      <button
        className={`clock-btn ${!isStart && "start"}`}
        onClick={isStart ? handleStopTimer : handleStartTimer}
      >
        {isStart ? "Pause" : "Start"}
      </button>
    </div>
  );
};

export default Clock;
