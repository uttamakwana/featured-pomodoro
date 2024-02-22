/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./settings.css";
import { applyShadesToCSSVariables } from "../../utils/generateColorShades";

const Settings = ({
  setShortBreak,
  setPomodoro,
  setLongBreak,
  isSettingOpen,
  setIsSettingOpen,
  pomodoro,
  shortBreak,
  longBreak,
  pomodoroColor,
  shortBreakColor,
  longBreakColor,
  setPomodoroColor,
  setShortBreakColor,
  setLongBreakColor,
  activeTab,
}) => {
  const pomodoroInputTimeRef = useRef(null);
  const shortBreakInputTimeRef = useRef(null);
  const longBreakInputTimeRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pomodoroInputTimeRef.current.value);
    setPomodoro(pomodoroInputTimeRef.current.value * 60 * 1000 || pomodoro);
    setShortBreak(
      shortBreakInputTimeRef.current.value * 60 * 1000 || shortBreak
    );
    setLongBreak(longBreakInputTimeRef.current.value * 60 * 1000 || longBreak);
    setIsSettingOpen(false);
    applyShadesToCSSVariables(
      pomodoroColor,
      shortBreakColor,
      longBreakColor,
      activeTab
    );
  };

  if (isSettingOpen) {
    return (
      <>
        <div className="overlay-blur level-1"></div>
        <div className="settings-container | br-10 absolute-center bg-white-900 p-2 text-black-900 ">
          <div className="setting-header flex-between relative">
            <h1 className="fs-heading text-center flex-grow-1 fw-800">
              Settings
            </h1>
            <span
              className="absolute pointer right-0 text-danger fs-heading"
              onClick={() => setIsSettingOpen(false)}
            >
              &#10006;
            </span>
          </div>
          <form
            action=""
            className="flex-col gap-1 mt-1"
            onSubmit={handleSubmit}
          >
            <div className="setting-color-group flex-between gap-8">
              <label htmlFor="pomodoro-color" className="fw-500">
                Pomodoro Theme
              </label>
              <input
                type="color"
                className="input-color p-4 br-4 bg-white-700"
                name="pomodoro-color"
                id="pomodoro-color"
                value={pomodoroColor}
                onChange={(e) => setPomodoroColor(e.target.value)}
              />
            </div>
            <div className="setting-color-group flex-between gap-8">
              <label htmlFor="short-break-color" className="fw-500">
                Short Break Theme
              </label>
              <input
                type="color"
                className="input-color p-4 br-4 bg-white-700"
                name="short-break-color"
                id="short-break-color"
                value={shortBreakColor}
                onChange={(e) => setShortBreakColor(e.target.value)}
              />
            </div>
            <div className="setting-color-group flex-between ai-center gap-8">
              <label htmlFor="long-break-color" className="fw-500">
                Long Break Theme
              </label>
              <input
                type="color"
                className="input-color p-4 br-4 bg-white-700"
                name="long-break-color"
                id="long-break-color"
                value={longBreakColor}
                onChange={(e) => setLongBreakColor(e.target.value)}
              />
            </div>
            <div className="setting-form-group | flex-col gap-4">
              <label htmlFor="pomodoro-time" className="fw-500 fs-body">
                Pomodoro Time
              </label>
              <input
                type="number"
                className="input bg-white-700 br-10"
                placeholder="25"
                min={20}
                max={40}
                ref={pomodoroInputTimeRef}
              />
            </div>
            <div className="setting-form-group | flex-col gap-4">
              <label htmlFor="pomodoro-time" className="fw-500 fs-body">
                Short Break Time
              </label>
              <input
                type="number"
                className="input bg-white-700 br-10"
                placeholder="5"
                min={5}
                max={10}
                ref={shortBreakInputTimeRef}
              />
            </div>
            <div className="setting-form-group | flex-col gap-4">
              <label htmlFor="pomodoro-time" className="fw-500 fs-body">
                Long Break Time
              </label>
              <input
                type="number"
                className="input bg-white-700 br-10"
                placeholder="25"
                min={20}
                max={40}
                ref={longBreakInputTimeRef}
              />
            </div>
            <button className="btn bg-info fs-button uppercase fw-600 text-white-900">
              Save
            </button>
          </form>
        </div>
      </>
    );
  }
};

export default Settings;
