import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
// styles
import "./styles/index.css";
import "./styles/utils.css";
import "./styles/color.css";
// context provider
import ContextProvider from "./context/ContextProvider.jsx";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
