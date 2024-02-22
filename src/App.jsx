/* eslint-disable react-hooks/exhaustive-deps */
// components
import { useEffect, useState } from "react";
import { Clock, Header, Settings } from "./components";
// styles
import "./styles/App.css";
import { applyShadesToCSSVariables } from "./utils/generateColorShades";

const App = () => {
  const [pomodoro, setPomodoro] = useState(25 * 60 * 1000);
  const [shortBreak, setShortBreak] = useState(5 * 60 * 1000);
  const [longBreak, setLongBreak] = useState(15 * 60 * 1000);
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [pomodoroColor, setPomodoroColor] = useState("#8ebabe");
  const [shortBreakColor, setShortBreakColor] = useState("#42766b");
  const [longBreakColor, setLongBreakColor] = useState("#ce5e09");
  const [activeTab, setActiveTab] = useState("Pomodoro");

  useEffect(() => {
    applyShadesToCSSVariables(
      pomodoroColor,
      shortBreakColor,
      longBreakColor,
      activeTab
    );
  }, [activeTab]);

  return (
    <main className="min-h-100 bg-primary-400" data-theme="Pomodoro" id="app">
      <div className="container">
        <Header setIsSettingOpen={setIsSettingOpen} />
        <Clock
          pomodoro={pomodoro}
          shortBreak={shortBreak}
          longBreak={longBreak}
          pomodoroColor={pomodoroColor}
          shortBreakColor={shortBreakColor}
          longBreakColor={longBreakColor}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Settings
          setPomodoro={setPomodoro}
          setShortBreak={setShortBreak}
          setLongBreak={setLongBreak}
          isSettingOpen={isSettingOpen}
          setIsSettingOpen={setIsSettingOpen}
          pomodoro={pomodoro}
          shortBreak={shortBreak}
          longBreak={longBreak}
          pomodoroColor={pomodoroColor}
          shortBreakColor={shortBreakColor}
          longBreakColor={longBreakColor}
          setPomodoroColor={setPomodoroColor}
          setShortBreakColor={setShortBreakColor}
          setLongBreakColor={setLongBreakColor}
          activeTab={activeTab}
        />
      </div>
    </main>
  );
};

export default App;
