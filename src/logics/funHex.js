import chroma from 'chroma-js';

export function playColorTone(hexColor, duration = 0.5) {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  // Convert color to HSL
  const [h, s, l] = chroma(hexColor).hsl();

  // Map hue (0–360) to frequency (e.g., 200–1000 Hz)
  const frequency = mapRange(h || 0, 0, 360, 200, 1000);

  oscillator.type = 'sine'; // You can try 'triangle' or 'square' too
  oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  // Fade out gently
  gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

  oscillator.start();
  oscillator.stop(audioCtx.currentTime + duration);
}

// Helper to map one range to another
function mapRange(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}


export const funHex = [
  {name: "midnightBlue",
    hex: "#191970",
    name: "Midnight Blue",
    funFact: "This deep navy shade was first used as a web color in 1987 and is darker than navy itself. It's associated with mystery, space, and elegance."
  },
  {name: "lightCoral",
    hex: "#F08080",
    name: "Light Coral",
    funFact: "Named after coral reefs, this color reflects healthy, vibrant coral—not the bleached white coral that's sadly becoming more common."
  },
  {name: "chocolate",
    hex: "#D2691E",
    name: "Chocolate",
    funFact: "Named after the treat, but doesn’t quite match any specific chocolate. Added to web-safe colors in the 1990s."
  },
  {name: "mediumPurple",
    hex: "#9370DB",
    name: "Medium Purple",
    funFact: "An X11 color that became a classic for fantasy themes and UIs, bridging the gap between lavender and violet."
  },
  {name: "lightPink",
    hex: "#FFB6C1",
    name: "Light Pink",
    funFact: "Used in therapy rooms and even jail cells to reduce aggression—known as the 'Drunk Tank Pink' effect."
  },
  {name: "slateBlue",
    hex: "#6A5ACD",
    name: "Slate Blue",
    funFact: "Despite the name, it’s more violet than slate. Introduced in X11 and popular in modern web design."
  },
  {name: "slateGray",
    hex: "#708090",
    name: "Slate Gray",
    funFact: "A cooler, bluish take on real slate stone. Used in industrial design and military aesthetics."
  },
  {name: "blueViolet",
    hex: "#8A2BE2",
    name: "Blue Violet",
    funFact: "A color caught between blue and violet. Often used in mystical art and to represent psychic energy."
  },
  {name: "limeLeaf",
    hex: "#67FA34",
    name: "Lime Leaf",
    funFact: "This vibrant green echoes the chlorophyll that powers plant photosynthesis—nature's solar panel at work!"
  },
  {name: "cyan",
    hex: "#00FFFF",
    name: "Cyan (Aqua)",
    funFact: "Used in CMYK printing and opposite red on the RGB spectrum. It cancels red in digital displays."
  },
  {name: "royalPurple",
    hex: "#800080",
    name: "Royal Purple",
    funFact: "Once reserved for royalty due to the rare sea snails required to produce its dye. More valuable than gold in ancient times."
  },
  {name: "electricBlue",
    hex: "#7DF9FF",
    name: "Electric Blue",
    funFact: "A glowing shade close to lightning in color. It was first named in the 1880s after the color of electric sparks."
  }
];
