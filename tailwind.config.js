/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-text": "#333333",
        "secondary-text": "#767278",
        beguni: "#6078EA",
        "main-color": "#4C6FFF",
        "earned-color": "#FF7373",
        progress: "#FBBC28",
        "custom-gray": "#F5F4F6",
        "custom-gray-40": "#8F92A1",
        "custom-gray-bg": "#6#6078EA0D",
        "dashboard-digit-black":"#102844",
        "sidebar-gradient": {
          start: "#418CD1",
          end: "#9C41D1",
        },
      },
      fontFamily: {
        inter: ["Inter", "cursive", "sans-serif"],
        poppins: ["Poppins", "cursive", "sans-serif"],
        montserrat: ["Montserrat", "cursive", "sans-serif"],
      },
    },
  },
  plugins: [import("flowbite/plugin")],
};
