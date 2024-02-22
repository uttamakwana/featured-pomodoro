let pomodoroShades;
let shortBreakShades;
let longBreakShades;

// Function to apply shades to CSS variables
export function applyShadesToCSSVariables(
  pomodoroColor,
  shortBreakColor,
  longBreakColor,
  tab = "Pomodoro"
) {
  // Convert hex colors to RGB format
  const pomodoroRGB = hexToRgb(pomodoroColor);
  const shortBreakRGB = hexToRgb(shortBreakColor);
  const longBreakRGB = hexToRgb(longBreakColor);
  // Generate shades for each color
  pomodoroShades = generateShades(pomodoroRGB, "Pomodoro");
  shortBreakShades = generateShades(shortBreakRGB, "Short Break");
  longBreakShades = generateShades(longBreakRGB, "Long Break");
  const root = document.getElementById("app");
  if (tab === "Pomodoro") {
    pomodoroShades.forEach((shade, index) => {
      root.style.setProperty(`--clr-primary-${(index + 1) * 100}`, shade);
    });
  } else if (tab === "Short Break") {
    shortBreakShades.forEach((shade, index) => {
      root.style.setProperty(`--clr-primary-${(index + 1) * 100}`, shade);
    });
  } else {
    longBreakShades.forEach((shade, index) => {
      root.style.setProperty(`--clr-primary-${(index + 1) * 100}`, shade);
    });
  }
}

// Function to convert hex color to RGB format
function hexToRgb(hex) {
  // Remove '#' if present
  hex = hex.replace("#", "");

  // Convert to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return { r, g, b };
}

// Function to generate shades of a color
function generateShades(rgb) {
  const baseLightness = 80; // Initial lightness
  const shades = [];

  for (let i = 0; i < 9; i++) {
    const lightness = baseLightness - i * 5; // Decrease lightness for each shade
    const hslColor = rgbToHsl(rgb.r, rgb.g, rgb.b);
    const hslShade = `hsl(${hslColor.h}, ${hslColor.s}%, ${lightness}%)`;
    shades.push(hslShade);
  }
  return shades;
}

// Function to convert RGB to HSL
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}
