/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#131B27",
        "secondary-color": "#9A1D29",
        "third-color": "#E6E6E6",
        "fourth-color": "#DC3545",
        "fifth-color": "#DC5F6B",
      },

      backgroundColor: {
        "primary-color": "#131B27",
        "secondary-color": "#9A1D29",
        "third-color": "#E6E6E6",
        "fourth-color": "#DC3545",
        "fifth-color": "#DC5F6B",
        "iphone-color": "#FDE1DD",
        "macbook-color": "#D3F5DC",
        "ipad-color": "#CDF9FF",
        "watch-color": "#FDDDF6",
        "airpod-color": "#E8DEFC",
        "accessory-color": "#FDE1DD",
      },
      gridTemplateColumns: {
        "2_1": "2fr 1fr",
      },
      padding: {
        "pt-415": "415px 0px 0px 0px",
      },
      borderRadius: {
        "1/2": "50%",
      },
      boxShadow: {
        "primary-shadow": "0px 5px 20px 1px rgba(0,0,0,0.3)",
      },
      height: {
        "250px": "250px",
        "490px": "490px",
        "530px": "530px",
        "590px": "590px",
      },
      translate: {
        "`-translate-y-1/2`": "--tw-translate-y: -50%",
      },
    },
    plugins: [require("tw-elements/dist/plugin.cjs")],
    darkMode: "class",
  },
};
