/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Adding custom styles for the divider
      borderColor: {
        divider: "#e2e8f0", // Example: a light gray color for the divider
      },
      borderWidth: {
        1: "1px", // Example: a custom border width for the divider
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".divider-top": {
          borderTopWidth: "2px",
          borderColor: "#EFEFEF", // Tailwind default color or your custom color
        },
        ".divider-bottom": {
          borderBottomWidth: "2px",
          borderColor: "#EFEFEF", // Tailwind default color or your custom color
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
