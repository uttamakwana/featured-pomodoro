export function findCurrentTab(tab) {
  if (tab[0].active) {
    return "pomodoro";
  } else if (tab[1].active) {
    return "shortBreak";
  } else {
    return "longBreak";
  }
}
