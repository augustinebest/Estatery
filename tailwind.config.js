/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      "html, body, ul": {
        margin: 30,
        padding: 30,
      },
      html: {
        background: "red"
      }
    },
  },
  plugins: [],
};
