// context from react
import { useContext } from "react";
// components
import { Header } from "../components";
// styles
import { style } from "./style.js";
// global context
import { Context } from "../context/ContextProvider.jsx";
// utils
import { findCurrentTab } from "./utils.js";
// css
import "./App.css";

const App = () => {
  //* state variables from context
  const { time } = useContext(Context);

  //* current tab(Pomodoro, Shortbreak, Longbreak)
  const currentTab = findCurrentTab(time);
  return (
    <main className={style.background(currentTab)}>
      <Header />
    </main>
  );
};

export default App;
