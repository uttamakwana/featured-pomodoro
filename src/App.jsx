/* eslint-disable react-hooks/exhaustive-deps */
// components
import { useContext } from "react";
import { Clock, Header, Settings } from "./components";
// styles
import "./styles/App.css";
import { Context } from "./store/ContextProvider";

const App = () => {
  const { activeTab } = useContext(Context);
  let coolText;
  if (activeTab === "Pomodoro") {
    coolText = "Let's get started on work!😁";
  } else if (activeTab === "Short Break") {
    coolText = "Have a short break to make your mind fresh🤯";
  } else {
    coolText = "Have a long break!🥄";
  }
  return (
    <main className="min-h-100 bg-primary-400" data-theme="Pomodoro" id="app">
      <div className="container">
        {/* Header */}
        <Header />
        {/* Clock */}
        <Clock />
        {/* Settings */}
        <Settings />
        <p className="app-cool-text text-center my-1 fs-body2 fw-500 italic text-primary-900">
          {coolText}
        </p>
      </div>
    </main>
  );
};

export default App;
