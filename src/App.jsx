// components
import { Header } from "./components";
// styles
import "./styles/App.css";

const App = () => {
  return (
    <main className="min-h-100 bg-primary-400" data-theme="Pomodoro" id="app">
      <div className="container">
        <Header />
      </div>
    </main>
  );
};

export default App;
