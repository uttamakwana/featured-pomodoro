/* eslint-disable react/prop-types */
// icons
import { SettingsIcon } from "../../constants/icons.js";

const Header = ({ setIsSettingOpen }) => {
  return (
    <header className="header">
      <div className="flex-between py-1">
        <h1 className="fw-800 fs-heading pointer">Pomodoro</h1>
        <SettingsIcon
          className="pointer fs-heading"
          title="Settings"
          onClick={() => setIsSettingOpen(true)}
        />
      </div>
    </header>
  );
};

export default Header;
