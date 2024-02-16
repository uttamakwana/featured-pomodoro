export function findCurrentTab(tab) {
  if (tab.pomodoro.active) {
    return "pomodoro";
  } else if (tab.shortBreak.active) {
    return "shortBreak";
  } else {
    return "longBreak";
  }
}
