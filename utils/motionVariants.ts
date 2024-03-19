type axeY = "top" | "bottom" | "";
type axeX = "left" | "right" | "";
type orchType = "beforeChildren";

function fade(
  fadeY: axeY,
  fadeX: axeX,
  duration: number,
  delay = 0.25,
  timing?: orchType,
) {
  let vertical: string;
  let horizontal: string;

  switch (fadeY) {
    case "top":
      vertical = "-10%";
      break;
    case "bottom":
      vertical = "10%";
      break;
    default:
      vertical = "0%";
      break;
  }

  switch (fadeX) {
    case "left":
      horizontal = "-10%";
      break;
    case "right":
      horizontal = "10%";
      break;
    default:
      horizontal = "0%";
      break;
  }

  return {
    start: { opacity: 0, y: vertical, x: horizontal },
    stop: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        type: "tween",
        when: timing,
        delay: delay,
      },
    },
  };
}

export { fade };
