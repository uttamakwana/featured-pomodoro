// context from react
import { useContext } from "react";
// utils
import { findCurrentTab } from "../../../utils.js";
// styles
import { style } from "./style.js";
// global context
import { Context } from "../../../context/ContextProvider.jsx";
// css
import "./tabs.css";
import { changeTimeState } from "./utils.js";

// component
const Tabs = () => {
  //* state variable from context
  const { time, setTime, setIsStart } = useContext(Context);
  //* tabs
  const tabs = [
    { title: "Pomodoro", value: "pomodoro" },
    { title: "Short Break", value: "shortBreak" },
    { title: "Long Break", value: "longBreak" },
  ];

  //* current active tab
  const activeTab = findCurrentTab(time);

  // function handle tab change
  function handleTabChange(id) {
    if (id === 0) {
      const copyTime = changeTimeState(time, id);
      console.log(copyTime);
      setTime(copyTime);
      setIsStart(false);
    } else {
      const wantTo = confirm(
        `Want to take a ${id === 1 ? "short" : "long"} break?`
      );
      if (wantTo) {
        const copyTime = changeTimeState(time, id);
        console.log(copyTime);
        setTime(copyTime);
        setIsStart(false);
      } else {
        console.log("stay at pomodoro");
        return;
      }
    }
  }
  return (
    <ul className={style.tabList().className}>
      {tabs.map((tab, index) => (
        <li
          key={index}
          className={style.tabItem(activeTab, tab.value).className}
          style={style.tabItem(activeTab, tab.value).style}
          onClick={() => handleTabChange(index)}
        >
          {tab.title}
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
