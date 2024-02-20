// icons
import { SettingsIcon } from "../../constants/icons.js";

const Header = () => {
  return (
    <header className="header">
      <div className="container flex-between py-1">
        <h1 className="fw-800 fs-heading pointer">Pomodoro</h1>
        <SettingsIcon className="pointer fs-heading" title="Settings" />
      </div>
    </header>
  );
};

export default Header;
