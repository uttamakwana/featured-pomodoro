export function formateTime(time) {
  const minutes = Math.floor(time / 60000); // convert milliseconds to minutes
  const seconds = Math.floor((time % 60000) / 1000); // convert remaining milliseconds to seconds
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
}

export function changeTabTimerAndTheme(tab, timer, setTimer) {
  setTimer(timer);
  document.getElementById("app").setAttribute("data-theme", tab);
}
