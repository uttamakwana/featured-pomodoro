export function changeTimeState(time, id) {
  return time.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        active: true,
      };
    } else {
      return {
        ...item,
        active: false,
      };
    }
  });
}
