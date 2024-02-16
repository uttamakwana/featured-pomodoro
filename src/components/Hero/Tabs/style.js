export const style = {
  tabList: () => {
    return {
      style: null,
      className: `flex jc-center`,
    };
  },
  tabItem: (activeTab, currentTab) => {
    return {
      style: {
        backgroundColor: activeTab === currentTab && "var(--clr-600)",
      },
      className: `tab-item p-8 br-4 pointer ${currentTab} flex-center text-center`,
    };
  },
};
