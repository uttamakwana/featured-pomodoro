export const style = {
  header: () => {
    return { style: null, className: `main-header flex-between pb-1` };
  },
  heading: () => {
    return {
      style: null,
      className: `app-heading text-center fs-heading fw-900`,
    };
  },
  listItem: () => {
    return {
      style: {
        backgroundColor: "var(--clr-500)",
      },
      className: `p-8 br-4 fs-small fw-500`,
    };
  },
};
