// components
import { Clock, Header, Todos } from "./components";
// styles
import "./styles/App.css";

const App = () => {
  return (
    <main className="min-h-100 bg-primary-400" data-theme="Pomodoro" id="app">
      <div className="container">
        <Header />
        <div className="hero flex-between gap-1">
          <Clock />
          <Todos />
        </div>
      </div>
    </main>
  );
};

export default App;
