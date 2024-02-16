export const style = {
  clockBtn: (isStart) => {
    return {
      style: {
        boxShadow: !isStart && "0 2px 2px var(--clr-white-100)",
        padding: "12px",
      },
      className: `clock-btn btn margin-inline-auto flex p-8 uppercase fs-regular fw-600`,
    };
  },
};
