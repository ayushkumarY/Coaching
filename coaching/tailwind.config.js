/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sixtyfour: ["Sixtyfour"],
        Honk: ["Honk"],
        Roboto: ["Roboto"],
        Acme: ["Acme"]
      },
    },
  },
  plugins: [],
};
