// tabs component
import Tabs from "../Tabs/Tabs";
import Clock from "../Clock/Clock.jsx";
// styles
import { timer } from "./style.js";

const Timer = () => {
  return (
    <>
      <div
        className={timer.timerContainer().className}
        style={timer.timerContainer().style}
      >
        <Tabs />
        <Clock />
      </div>
    </>
  );
};

export default Timer;
