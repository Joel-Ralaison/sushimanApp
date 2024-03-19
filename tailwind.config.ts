import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mini: "360px",
        tablet: "1095px",
      },
      backgroundColor: {
        primary: "#b1454a",
        secondary: "#121212",
        creamson: "#fff0de",
      },
      colors: {
        primary: "#b1454a",
        secondary: "#121212",
        creamson: "#fff0de",
      },
      fontFamily: {
        jakarta: "jakarta",
        playfair: "playfair",
      },
    },
  },
  plugins: [],
};
export default config;
