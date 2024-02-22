import { useEffect, useState } from "react";
import Tabs from "./Tabs/Tabs";
import Timer from "./Timer/Timer";
// css
import "./clock.css";
import { changeTabTimerAndTheme } from "./utils";

const Clock = () => {
  const [activeTab, setActiveTab] = useState("Pomodoro");
  const [pomodoro, setPomodoro] = useState(25 * 60 * 1000);
  const [shortBreak, setShortBreak] = useState(5 * 60 * 1000);
  const [longBreak, setLongBreak] = useState(15 * 60 * 1000);
  const [clockTime, setClockTime] = useState(pomodoro);
  const [isStart, setIsStart] = useState(false);
  const [previousInterval, setPreviousInterval] = useState(null);
  console.count("component re-rendering...");
  // functions:
  // handle change tab
  function handleChangeTab(tab) {
    setIsStart(false);
    if (tab === "Short Break") {
      if (isStart) {
        const sureToChange = confirm("Are you sure?");
        if (sureToChange) {
          changeTabTimerAndTheme(tab, shortBreak, setClockTime);
        } else {
          setIsStart(true);
          return;
        }
      } else {
        changeTabTimerAndTheme(tab, shortBreak, setClockTime);
      }
    } else if (tab === "Long Break") {
      if (isStart) {
        const sureToChange = confirm("Are you sure?");
        if (sureToChange) {
          changeTabTimerAndTheme(tab, longBreak, setClockTime);
        } else {
          setIsStart(true);
          return;
        }
      } else {
        changeTabTimerAndTheme(tab, longBreak, setClockTime);
      }
    } else {
      changeTabTimerAndTheme(tab, pomodoro, setClockTime);
    }
    setActiveTab(tab);
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
