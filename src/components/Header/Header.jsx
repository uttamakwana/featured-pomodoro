// styles
import { style } from "./styles.js";
// css
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className={`container ${style.header().className}`}>
        <h1 className={style.heading().className}>Pomodoro</h1>
        <ul>
          <li
            className={style.listItem().className}
            style={style.listItem().style}
          >
            Settings
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
