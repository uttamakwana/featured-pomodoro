// tabs
const displayTabs = ["Pomodoro", "Short Break", "Long Break"];

const Tabs = () => {
  return (
    <div className="tabs-container flex">
      {displayTabs.map((tab) => (
        <button
          key={tab}
          className="tab-btn flex-grow-1 p-8 border-none outline-none fw-600 fs-body1 text-white-900 br-10 text-center fs-medium"
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
