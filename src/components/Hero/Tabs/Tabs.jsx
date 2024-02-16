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
    const copyTime = changeTimeState(time, id);
    console.log(copyTime);
    setTime(copyTime);
    setIsStart(false);
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