/* eslint-disable react/prop-types */
const displayTabs = ["Pomodoro", "Short Break", "Long Break"];

const Tabs = ({ activeTab, handleChangeTab }) => {
  return (
    <div className="tabs-container flex wrap w-100">
      {displayTabs.map((displayTab) => (
        <button
          key={displayTab}
          className={`tab-btn | p-8 border-none outline-none flex-grow-1 br-5 text-white-900 fw-500 ${
            displayTab === activeTab && "active"
          }`}
          onClick={() => handleChangeTab(displayTab)}
        >
          {displayTab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
