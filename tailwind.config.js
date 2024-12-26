/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'active': 'rgba(21, 112, 239, 1)'
      },
      textColor: {
        'primary': 'rgba(24, 29, 39, 1)',
        'secondary': "rgba(8, 23, 53, 1)",
        'faded': 'rgba(65, 70, 81, 1)'
      },
      borderColor: {
        'divider': 'rgba(230, 232, 240, 1)',
        'buttons': 'rgba(216, 218, 229, 1)',
        'component': 'rgba(213, 215, 218, 1)',
      },
      boxShadow: {
        'box': '0px 0px 24px 0px rgba(8, 23, 53, 0.16)',
      }
    },
  },
  plugins: [],
}

