/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '420px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      backgroundImage: {
        leftimg: 'url("/Hero-Left.jpg")',
        rightimg: 'url("/hero-right.jpg")',
        // circleStar: 'url("/circle-star.svg")',
        // site: 'url("/site-bg.svg")',
      },
      colors: {
        primary: '#303030',
        accent: '#ffc200',
      },
      fontFamily: {
        grandhotel: ['Grand Hotel', 'cursive'],
        monsterrat: ['Monsterrat', 'sans-serif'],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  plugins: [],
};
