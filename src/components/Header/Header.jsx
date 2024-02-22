/* eslint-disable react/prop-types */
// icons
import { useContext } from "react";
import { SettingsIcon } from "../../constants/icons.js";
import { Context } from "../../store/ContextProvider.jsx";
import logoIcon from "../../assets/logo.png";

const Header = () => {
  const { setIsSettingOpen } = useContext(Context);

  return (
    <header className="header">
      <div className="flex-between py-1">
        <div className="header-heading flex gap-8 ai-center">
          <img src={logoIcon} alt="logo" />
          <h1 className="fw-800 pointer">Pomofocus</h1>
        </div>
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
