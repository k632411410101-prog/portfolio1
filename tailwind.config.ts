import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "game-sky": "#87CEEB",
        "game-grass": "#4CAF50",
        "game-wood": "#8B4513",
        "game-dark-wood": "#654321",
        "game-stone": "#A9A9A9",
        "game-sand": "#EDC9AF",
      },
      fontFamily: {
        pixel: ["Press Start 2P", "cursive"],
        vietnam: ["Be Vietnam Pro", "sans-serif"],
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "sway": "sway 2s ease-in-out infinite",
        "bob": "bob 1s ease-in-out infinite",
        "spin-slow": "spin 4s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
