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
        white: "#f0ebde",
        "dark-green": "#133629",
        antiquewhite: "#e9e0cb",
        olive: "#9b8957",
        darkslategray: {
          "100": "rgba(19, 54, 41, 0.2)",
          "200": "rgba(19, 54, 41, 0.8)",
        },
        "light-green": "rgba(19, 54, 41, 0.7)",
      },
      fontFamily: {
        karla: "Karla",
        lora: "Lora",
        "lexend-deca": "'Lexend Deca'",
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
    },
  },
  corePlugins: {
    preflight: false,
  },
};
