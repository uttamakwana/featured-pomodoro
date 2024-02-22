import { useContext, useRef } from "react";
import "./settings.css";
import { applyShadesToCSSVariables } from "../../utils/generateColorShades";
import { Context } from "../../store/ContextProvider";

const Settings = () => {
  // Accessing context and state variables
  const {
    setPomodoro,
    setShortBreak,
    setLongBreak,
    isSettingOpen,
    setIsSettingOpen,
    pomodoro,
    shortBreak,
    longBreak,
    pomodoroColor,
    setPomodoroColor,
    shortBreakColor,
    setShortBreakColor,
    longBreakColor,
    setLongBreakColor,
    activeTab,
  } = useContext(Context);

  // Refs for input fields
  const pomodoroInputTimeRef = useRef(null);
  const shortBreakInputTimeRef = useRef(null);
  const longBreakInputTimeRef = useRef(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update pomodoro, short break, and long break times
    setPomodoro(pomodoroInputTimeRef.current.value * 60 * 1000 || pomodoro);
    setShortBreak(
      shortBreakInputTimeRef.current.value * 60 * 1000 || shortBreak
    );
    setLongBreak(longBreakInputTimeRef.current.value * 60 * 1000 || longBreak);
    // Close settings modal
    setIsSettingOpen(false);
    // Apply color shades
    applyShadesToCSSVariables(
      pomodoroColor,
      shortBreakColor,
      longBreakColor,
      activeTab
    );
  };

  // Render settings form if settings modal is open
  if (isSettingOpen) {
    return (
      <>
        {/* Overlay */}
        <div className="overlay-blur level-1"></div>
        {/* Settings modal */}
        <div className="settings-container | br-10 absolute-center bg-white-900 p-2 text-black-900 ">
          {/* Settings header */}
          <div className="setting-header flex-between relative">
            <h1 className="fs-subheading text-center flex-grow-1 fw-800">
              Settings
            </h1>
            <span
              className="absolute pointer right-0 text-danger fs-subheading"
              onClick={() => setIsSettingOpen(false)}
            >
              &#10006;
            </span>
          </div>
          {/* Settings form */}
          <form
            action=""
            className="flex-col gap-1 mt-1"
            onSubmit={handleSubmit}
          >
            {/* Pomodoro Theme */}
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
            {/* Short Break Theme */}
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
            {/* Long Break Theme */}
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
            {/* Pomodoro Time */}
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
                id="pomodoro-input-timer"
                title="Pomdoro technique says time between 25 to 40 minute is good for effective learning!"
              />
            </div>
            {/* Short Break Time */}
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
                title="Pomdoro technique says take short break of 5 to 10 minutes"
              />
            </div>
            {/* Long Break Time */}
            <div className="setting-form-group | flex-col gap-4">
              <label htmlFor="pomodoro-time" className="fw-500 fs-body">
                Long Break Time
              </label>
              <input
                type="number"
                className="input bg-white-700 br-10"
                placeholder="15"
                min={15}
                max={30}
                ref={longBreakInputTimeRef}
                title="Pomdoro technique says take long break of 15 to 30 minutes"
              />
            </div>
            {/* Save Button */}
            <button className="btn bg-info fs-button uppercase fw-600 text-white-900">
              Save
            </button>
          </form>
        </div>
      </>
    );
  } else {
    return null; // Return null if settings modal is closed
  }
};

export default Settings;
