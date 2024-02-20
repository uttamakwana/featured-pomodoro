// components
import Tabs from "./Tabs/Tabs";
import Timer from "./Timer/Timer";
// css
import "./clock.css";

const Clock = () => {
  return (
    <div className="clock-container max-w-600 w-100 flex-col bg-primary-500 p-1 br-10 gap-1">
      <Tabs />
      <Timer />
      <button className="clock-btn p-1 border-none outline-none fw-600 fs-body1 bg-white-900 text-primary-900 uppercase fw-700 br-10">
        Start
      </button>
    </div>
  );
};

export default Clock;
