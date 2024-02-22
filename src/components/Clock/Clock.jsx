/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from "react";
import Tabs from "./Tabs/Tabs";
import Timer from "./Timer/Timer";
// css
import "./clock.css";
import { changeTabTimerAndTheme, formateTime } from "./utils";
import { Context } from "../../store/ContextProvider";
// audio sound
import clickSound from "../../assets/click-sound.mp3";
import alarmSound from "../../assets/alarm.mp3";

const Clock = () => {
  const { pomodoro, shortBreak, longBreak, activeTab, setActiveTab } =
    useContext(Context);
  const [clockTime, setClockTime] = useState(pomodoro);
  const [isStart, setIsStart] = useState(false);
  const [previousInterval, setPreviousInterval] = useState(null);
  const [noti, setNoti] = useState(false);
  const alarmSoundRef = useRef(null);
  const clickSoundRef = useRef(null);

  if (activeTab === "Pomodoro") {
    document.title = `Work for ${formateTime(clockTime)}`;
  } else {
    document.title = `Rest for ${formateTime(clockTime)}`;
  }

  Notification.requestPermission().then((res) => {
    if (res === "granted") {
      setNoti(true);
    } else {
      setNoti(true);
    }
  });

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
    clickSoundRef.current.play();
    alarmSoundRef.current.pause();
    setIsStart(true);
  }
  // handle stop timer
  function handleStopTimer() {
    clickSoundRef.current.play();
    setIsStart(false);
  }

  useEffect(() => {
    let interval;
    if (isStart) {
      interval = setInterval(() => {
        setClockTime((prev) => {
          if (prev >= 1000) {
            return prev - 1000;
          } else {
            setIsStart(false);
            alarmSoundRef.current.play();
            if (activeTab === "Pomodoro") {
              setActiveTab("Short Break");
              setClockTime(shortBreak + 1000);
              if (noti) {
                const notification = new Notification("Pomofocus", {
                  body: "Please take a braek to refresh your mind for effective study",
                });
                notification.show();
              }
            } else {
              setActiveTab("Pomodoro");
              setClockTime(pomodoro + 1000);
              if (noti) {
                const notification = new Notification("Pomofocus", {
                  body: "Get ready for working!",
                });
                notification.show();
              }
            }
          }
          return 0;
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
    <div className="clock-container flex-col ai-center gap-1 bg-primary-500 p-1 br-5">
      <Tabs activeTab={activeTab} handleChangeTab={handleChangeTab} />
      <Timer clockTime={clockTime} />
      <button
        className={`clock-btn ${!isStart && "start"}`}
        onClick={isStart ? handleStopTimer : handleStartTimer}
      >
        {isStart ? "Pause" : "Start"}
      </button>
      {/* Adding audio sounds */}
      <audio src={clickSound} ref={clickSoundRef}></audio>
      <audio src={alarmSound} ref={alarmSoundRef}></audio>
    </div>
  );
};

export default Clock;
