// tailwind.config.js
module.exports = {
  content: [
    "./index.html",       // index.html in the main folder
    "./style.css",        // style.css in the main folder
    "./src/**/*.{js,ts,jsx,tsx}",  // Only scan JS/TS files in the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}