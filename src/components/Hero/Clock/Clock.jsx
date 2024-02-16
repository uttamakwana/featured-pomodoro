import { useContext, useEffect, useState } from "react";
import { Context } from "../../../context/ContextProvider";
import "./clock.css";
import { style } from "./style.js";

const Clock = () => {
  const { time, isStart, setIsStart } = useContext(Context);
  const [clockTime, setClockTime] = useState(25 * 60 * 100);
  const [pausedTime, setPausedTime] = useState(null);

  // Format time function
  function formatTime(clockTime) {
    const minutes = Math.floor(clockTime / 60000); // convert milliseconds to minutes
    const seconds = Math.floor((clockTime % 60000) / 1000); // convert remaining milliseconds to seconds
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  }

  useEffect(() => {
    setClockTime(time.find((t) => t.active).time);
  }, [time]);
  // Set timer
  useEffect(() => {
    let interval;
    if (isStart) {
      interval = setInterval(() => {
        setClockTime((prev) => {
          const updatedTime = prev - 1000;
          return updatedTime >= 0 ? updatedTime : 0; // ensure time doesn't go negative
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [time, isStart]);

  // handle click
  function handleStart() {
    if (pausedTime !== null) {
      setClockTime(pausedTime);
      setPausedTime(null); // Clear paused time once resumed
    } else {
      setClockTime(time.find((t) => t.active).time);
    }
    setIsStart(true);
  }

  function handleStop() {
    setPausedTime(clockTime); // Store current time when pausing
    setIsStart(false);
  }

  return (
    <>
      <div className="flex-center p-1 clock-container fs-heading">
        <h1>{formatTime(clockTime)}</h1>
      </div>
      <button
        className={style.clockBtn(isStart).className}
        onClick={isStart ? handleStop : handleStart}
        style={style.clockBtn(isStart).style}
      >
        {isStart ? "Pause" : "Start"}
      </button>
    </>
  );
};

export default Clock;
