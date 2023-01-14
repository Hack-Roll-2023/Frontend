/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          800: "#232323",
          900: "#171717",
        },
      },
      fontFamily: {
        chinese: ["Chinese"],
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
        },
      },
    },
  },
  plugins: [],
};
