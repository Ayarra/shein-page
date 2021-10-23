module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customA: "#F7F8FA",
        customB: "#636364",
        customC: "#333333",
        customD: "#999999",
        customE: "#222222",
      },
    },
  },
  variants: {
    display: ["responsive", "group-hover", "group-focus"],
    extend: {
      backgroundColor: ["disabled"],
    },
  },
  plugins: [],
};
