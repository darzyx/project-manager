// String interpolation on rgba(hex,a) doesn't work inside a Styled
// Component, so we use this function to do this outside of it
export const hexToRGB = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};

// Object.keys returns keys as strings, but for type safety we want
// to keep the original keys type:
export const getKeys = Object.keys as <T extends object>(
  obj: T
) => Array<keyof T>;

// CSS repeat() with custom values that works inside of Styled Components
export const cssRepeat = (num: number, width: string = "1fr") => {
  return "repeat(" + num.toString() + ", " + width + ")";
};
