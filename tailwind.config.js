/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: "rgba(240, 235, 222, 0.1)",
        darkslategray: {
          "200": "rgba(19, 54, 41, 0.8)",
          "300": "rgba(19, 54, 41, 0.6)",
        },
        antiquewhite: "#e9e0cb",
        white: "#f0ebde",
        stroke: "rgba(19, 54, 41, 0.2)",
        "dark-green": "#133629",
        olive: "#9b8957",
        "light-green": "rgba(19, 54, 41, 0.7)",
        orange: "#dd7143",
      },
      fontFamily: {
        karla: "Karla",
        lora: "Lora",
        "lexend-deca": "'Lexend Deca'",
        inherit: "inherit",
      },
    },
    fontSize: {
      base: "1rem",
      lg: "1.13rem",
      "53xl": "4.5rem",
      xl: "1.25rem",
      sm: "0.88rem",
      "5xl": "1.5rem",
      "21xl": "2.5rem",
      "13xl": "2rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
