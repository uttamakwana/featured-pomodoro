// tabs component
import Tabs from "../Tabs/Tabs";
// styles
import { style } from "./style.js";

const Timer = () => {
  return (
    <>
      <div
        className={`${style.timerContainer().className}`}
        style={style.timerContainer().style}
      >
        <Tabs />
      </div>
    </>
  );
};

export default Timer;
